from django.shortcuts import render


from quizclashBackend.serializers import CreateUserSerializer,UpdateUserSerializer,LoginSerializer
from quizclashBackend.models import User
from knox import views as knox_views
from django.contrib.auth import login

from rest_framework.generics import CreateAPIView, UpdateAPIView
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework.response import Response
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
