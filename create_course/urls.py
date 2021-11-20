from django.urls import path
from . import views


urlpatterns = [
	path('', views.create_course_one, name='create_course_one'),
	path('create_course_detail/<pk>/', views.create_course_two, name='create_course_two'),

]