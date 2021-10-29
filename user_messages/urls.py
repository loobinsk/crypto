from django.urls import path
from .views import messages, dialogue_detail

urlpatterns = [
    path('', messages, name='messages'),
    path('dialogue/<pk>/', dialogue_detail, name='dialogue_detail')
]
