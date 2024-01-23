from django.urls import path
from quizclashBackend import views
from knox.views import LogoutView,LogoutAllView

urlpatterns = [
    path('create-user/', views.CreateUserAPI.as_view()),
    path('update-user/<int:pk>', views.UpdateUserAPI.as_view()),
    path('user/<int:pk>', views.GetUserAPIView.as_view()),
    path('user-all/', views.GetUserAllAPIView.as_view()),
    path('leaderboard/', views.LeaderBoardView.as_view()),
    path('login/', views.LoginAPIView.as_view()),
    path('logout/', LogoutView.as_view()),
    path('logout-all/', LogoutAllView.as_view()),

   
]