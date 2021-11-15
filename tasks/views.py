from django.shortcuts import render
from courses.models import Course

def tasks(request):
	template = 'auth_pages/tasks.html'

	courses = Course.objects.filter(author=request.user, active=True)
	
	context = {
		'courses': courses,
		}
		
	return render(request, template, context)