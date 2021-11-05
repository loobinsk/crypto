from django.urls import path
from .views import messages, dialogue_detail, delete_dialogue

urlpatterns = [
    path('', messages, name='messages'),
    path('dialogue/<pk>/', dialogue_detail, name='dialogue_detail'),
    path('delete_dialogue/<pk>/', delete_dialogue, name='delete_dialogue'),
]
