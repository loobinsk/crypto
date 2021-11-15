from django.urls import path
from . import views


urlpatterns = [
	path('', views.statistic, name='statistic'),
	path('students/', views.statistic_students, name='statistic_students'),
	path('reviews/', views.statistic_reviews, name='statistic_reviews'),
]