from django.shortcuts import render


from quizclashBackend.serializers import CreateUserSerializer,UpdateUserSerializer,LoginSerializer,QuizSerializer,QuestionSerializer,UserLoginSerializer,LeaderBoardSerializer,UpdateScoreSerializer
from quizclashBackend.models import User,Quiz,Question
from knox import views as knox_views
from django.contrib.auth import login
from django.contrib.auth import update_session_auth_hash

from rest_framework.generics import CreateAPIView, UpdateAPIView,RetrieveAPIView,DestroyAPIView,ListAPIView
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser



class CreateUserAPI(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = CreateUserSerializer
    permission_classes = (AllowAny,)

class UpdateUserAPI(UpdateAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = User.objects.all()
    parser_classes = (MultiPartParser, FormParser)
    serializer_class = UpdateUserSerializer
    
class LoginAPIView(knox_views.LoginView):
    permission_classes = (AllowAny,)
    serializer_class = LoginSerializer

    def post(self,request,format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.validated_data['user']
            login(request,user)
            response = super().post(request,format=None)

        else:
            return Response({'errors':serializer.errors},status = status.HTTP_400_BAD_REQUEST)
        return Response(response.data,status = status.HTTP_200_OK)
    
class GetUserAPIView(RetrieveAPIView,LoginAPIView,ListAPIView):
    permission_classes = (IsAuthenticated,)
    parser_classes = (MultiPartParser, FormParser)
    serializer_class = UserLoginSerializer
    queryset = User.objects.all()

class GetUserAllAPIView(ListAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = UserLoginSerializer
    parser_classes = (MultiPartParser, FormParser)
    queryset = User.objects.filter(is_staff=False)

class UpdateScoreAPIView(APIView):
    permission_classes = (IsAuthenticated,)

    def put(self, request, user_id, *args, **kwargs):
        serializer = UpdateScoreSerializer(data=request.data)
        if serializer.is_valid():
            score_value = serializer.validated_data['score_value']

            try:
                user = User.objects.get(id=user_id)
            except User.DoesNotExist:
                return Response({'errors': 'User not found.'}, status=status.HTTP_404_NOT_FOUND)

            # Check if the authenticated user is updating their own score
            if request.user.id != user.id:
                return Response({'errors': 'Permission denied.'}, status=status.HTTP_403_FORBIDDEN)

            user.update_score(score_value)
            return Response({'message': 'Score updated successfully.'}, status=status.HTTP_200_OK)
        else:
            return Response({'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        
class LeaderBoardView(ListAPIView):
    permission_classes = (AllowAny,)
    serializer_class = LeaderBoardSerializer
    parser_classes = (MultiPartParser, FormParser)
    queryset = User.objects.order_by('-score')[:50]

    # Quiz API by using basic technique
class QuizAPIView(APIView):
    permission_classes = (AllowAny,)
    serializer_class = QuizSerializer

    def post(self,request,*args,**kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status = status.HTTP_201_CREATED)
        else:
            return Response({'errors':serializer.errors},status = status.HTTP_400_BAD_REQUEST)
        
    def get(self,request,*args,**kwargs):
        queryset = Quiz.objects.all()
        serializer = self.serializer_class(queryset,many=True)
        return Response(serializer.data,status = status.HTTP_200_OK)
    
    def put(self,request,*args,**kwargs):
        pk = kwargs.get('pk')
        try:
            instance = Quiz.objects.get(id=pk)
        except Quiz.DoesNotExist:
            return Response({'errors': 'Quiz is not exist'},status = status.HTTP_204_NO_CONTENT)
        
        serializer =self.serializer_class(instance = instance,data= request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status = status.HTTP_202_ACCEPTED)
        else:
            return Response({'errors':serializer.errors},status = status.HTTP_400_BAD_REQUEST)
        
    def patch(self, request, *args, **kwargs):
        pk = kwargs.get('pk')
        try:
            instance = Quiz.objects.get(id=pk)
        except Quiz.DoesNotExist:
            return Response({'errors': 'Quiz is not exist'},status = status.HTTP_204_NO_CONTENT)
        
        serializer = self.serializer_class(instance=instance, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status = status.HTTP_202_ACCEPTED)
        else:
            return Response({'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        
    def delete(self, request, *args, **kwargs):
        pk = kwargs.get('pk')
        try:
            instance = Quiz.objects.get(id=pk)
        except Quiz.DoesNotExist:
            return Response({'errors': 'Quiz is not exist'},status = status.HTTP_204_NO_CONTENT)
        return Response({'message': 'the Quiz has been deleted'},status = status.HTTP_200_OK) if instance.delete() else Response({'message': 'Failed to delete the Quiz'}, status=status.HTTP_400_BAD_REQUEST) 
    
class QuestionAPIView(CreateAPIView,UpdateAPIView,RetrieveAPIView,DestroyAPIView):
    permission_classes = (AllowAny,)
    serializer_class = QuestionSerializer
    parser_classes = (MultiPartParser, FormParser)
    queryset = Question.objects.all()

class QuizzesAPIView(ListAPIView):
    permission_classes = (AllowAny,)  
    serializer_class = QuestionSerializer

    def get_queryset(self):
        quizid = self.kwargs.get('quiz_id')
        return Question.objects.filter(quiz_id=quizid)
    
class ChangePasswordView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        current_password = request.data.get('currentPassword', '')
        new_password = request.data.get('newPassword', '')
        confirm_password = request.data.get('confirmPassword', '')

        if not request.user.check_password(current_password):
            return Response({'error': 'Incorrect current password'}, status=status.HTTP_400_BAD_REQUEST)

        if new_password != confirm_password:
            return Response({'error': 'New passwords do not match'}, status=status.HTTP_400_BAD_REQUEST)

        request.user.set_password(new_password)
        request.user.save()
        update_session_auth_hash(request, request.user)

        return Response({'message': 'Password changed successfully'}, status=status.HTTP_200_OK)
    

class DeleteAccountView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        try:
            
            request.user.delete()

            return Response({'message': 'Account deleted successfully'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': f'Error deleting account: {str(e)}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)