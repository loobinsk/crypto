from django.urls import path
from .views import settings, delete_image

urlpatterns = [
    path('', settings, name='settings'),
    path('delete-image/', delete_image, name='delete_profile_image'),
]