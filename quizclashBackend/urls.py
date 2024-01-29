from django.urls import path
from quizclashBackend import views
from knox.views import LogoutView,LogoutAllView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('create-user/', views.CreateUserAPI.as_view()),
    path('update-user/<int:pk>', views.UpdateUserAPI.as_view()),
    path('user/<int:pk>', views.GetUserAPIView.as_view()),
    path('user-all/', views.GetUserAllAPIView.as_view()),
    path('update-score/<int:user_id>/', views.UpdateScoreAPIView.as_view(), name='update_score'),
    path('leaderboard/', views.LeaderBoardView.as_view()),
    path('login/', views.LoginAPIView.as_view()),
    path('logout/', LogoutView.as_view()),
    path('logout-all/', LogoutAllView.as_view()),
    path('change-password/', views.ChangePasswordView.as_view(), name='change_password'),
    path('delete-account/', views.DeleteAccountView.as_view(), name='delete_account'),
    path('update-profile-picture/', views.UpdateProfilePictureView.as_view(), name='update_profile_picture'),

   
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)