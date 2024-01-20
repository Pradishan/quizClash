from django.shortcuts import render


from quizclashBackend.serializers import CreateUserSerializer,UpdateUserSerializer,LoginSerializer,QuizSerializer,QuestionSerializer,UserLoginSerializer
from quizclashBackend.models import User,Quiz,Question
from knox import views as knox_views
from django.contrib.auth import login

from rest_framework.generics import CreateAPIView, UpdateAPIView,RetrieveAPIView,DestroyAPIView,ListAPIView
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status



class CreateUserAPI(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = CreateUserSerializer
    permission_classes = (AllowAny,)

class UpdateUserAPI(UpdateAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = User.objects.all()
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
    
class GetUserAPIView(RetrieveAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = UserLoginSerializer
    queryset = User.objects.all()
    
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
    queryset = Question.objects.all()

class QuizzesAPIView(ListAPIView):
    permission_classes = (AllowAny,)  
    serializer_class = QuestionSerializer

    def get_queryset(self):
        quizid = self.kwargs.get('quiz_id')
        return Question.objects.filter(quiz_id=quizid)
    
