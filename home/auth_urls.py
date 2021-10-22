from django.urls import path, include
from .auth_views import dashboard
from forum.views import news
from django.views.generic import TemplateView

urlpatterns = [
    path('', dashboard, name='dashboard'),
]
