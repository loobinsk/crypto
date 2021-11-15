from django.urls import path
from .views import profile, delete_post


urlpatterns = [
    path('profile/<pk>/', profile, name='profile'),
    path('delete_post/<pk>/<pk_pr>/', delete_post, name='delete_post'),
]