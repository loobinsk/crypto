from django.shortcuts import render
from courses.models import CategoryByType, CategoryBySkill
from courses.models import Course, CourseReview
from groups.models import Teacher, Student
from django.contrib.auth.decorators import login_required


@login_required
def dashboard(request):
	template = 'auth_index.html'

	student = Student.objects.get(user=request.user)

	context = {'student': student}
	return render(request, template, context)