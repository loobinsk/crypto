from django.shortcuts import render


def tasks(request):
	template = 'auth_pages/tasks.html'
	
	context = {}
	return render(request, template, context)