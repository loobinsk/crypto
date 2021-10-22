from django.urls import path
from .views import delete_question, news
from django.views.generic import TemplateView

urlpatterns = [
    path('', news, name='news'),
    path('delete_question/<pk>/', delete_question, name='delete_question'),
]