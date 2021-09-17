from rest_framework import generics
from ..models import Course
from .serializers import CourseSerializer


class CourseCreateView(generics.ListCreateAPIView):
	queryset = Course.objects.filter(active=False)
	serializer_class = CourseSerializer

class CourseDetailView(generics.RetrieveUpdateDestroyAPIView):
	queryset = Course.objects.all()
	serializer_class = CourseSerializer
