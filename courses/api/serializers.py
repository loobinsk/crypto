from rest_framework import serializers
from ..models import Course, CategoryByType, CategoryBySkill


class CourseSerializer(serializers.ModelSerializer):
	class Meta:
		model = Course
		fields = '__all__'

class CategoryByTypeSerializer(serializers.ModelSerializer):
	class Meta:
		model = CategoryByType
		fields = '__all__'

class CategoryBySkillSerializer(serializers.ModelSerializer):
	class Meta:
		model = CategoryBySkill
		fields = '__all__'