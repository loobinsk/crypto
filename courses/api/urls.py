from django.urls import path, re_path
from . import views


app_name = 'courses'
urlpatterns = [
	path('course/',
		views.CourseCreateView.as_view(),
		name='course_list'),
	path('course/<pk>/',
		views.CourseDetailView.as_view(),
		name='course_detail'),
]
