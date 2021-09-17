from django.urls import path
from .views import courses_list, courses_detail, review_like


urlpatterns = [
	path('', courses_list, name='courses_list'),
	path('review-like/', review_like, name='review-like'),
	path('<pk>/', courses_detail, name='courses_detail'),
]