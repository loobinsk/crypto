from django.urls import path
from .views import courses_list, courses_detail, review_like,course_task


urlpatterns = [
	path('', courses_list, name='courses_list'),
	path('review-like/', review_like, name='review-like'),
	path('course_tasks/<pk>/', course_task, name='course_task'),
	path('<pk>/', courses_detail, name='courses_detail'),
]