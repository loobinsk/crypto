from django.urls import path
from .views import delete_question, news, question_detail
from django.views.generic import TemplateView

urlpatterns = [
    path('', news, name='news'),
    path('question_detail/<pk>/', question_detail, name='question_detail'),
    path('delete_question/<pk>/', delete_question, name='delete_question'),
]