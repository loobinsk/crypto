from django.shortcuts import render
from courses.models import CategoryByType, CategoryBySkill
from courses.models import Course, CourseReview
from groups.models import Teacher, Student
from django.contrib.auth.decorators import login_required


@login_required
def dashboard(request):
	template = 'auth_index.html'

	context = {}
	return render(request, template, context)