"""
URL configuration for quizClash project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# from django.contrib import admin
# from django.urls import path

# urlpatterns = [
#     path('admin/', admin.site.urls),
# ]

from django.contrib import admin
from django.urls import path,include
from django.urls import re_path as url
from quizclashBackend import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/',include('quizclashBackend.urls')),
    path('quiz/',views.QuizAPIView.as_view()),
    path('quiz/<int:pk>/',views.QuizAPIView.as_view()),
    path('question/',views.QuestionAPIView.as_view()),
    path('question/<int:pk>/',views.QuestionAPIView.as_view()),
    path('quizzes/<int:quiz_id>/questions/',views.QuizzesAPIView.as_view()),
]