from django.urls import path
from .views import homepage, about
from .views import reviews
from django.views.generic import TemplateView

urlpatterns = [
    path('', homepage, name='homepage'),
    path('about/', about, name='about'),
    path('map/', TemplateView.as_view(template_name="homepage/map.html"), name='map'),
    path('reviews/', reviews, name='reviews'),
    path('contacts/', TemplateView.as_view(template_name="homepage/form.html"), name='contacts'),
    path('help/', TemplateView.as_view(template_name="homepage/help.html"), name='help'),
]
