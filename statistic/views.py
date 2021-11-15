from django.shortcuts import render


def statistic(request):
	template = 'auth_pages/statistic/statistics.html'

	context = {}
	return render(request, template, context)


def statistic_students(request):
	template = 'auth_pages/statistic/statistics-students.html'

	context = {}
	return render(request, template, context)

def statistic_reviews(request):
	template = 'auth_pages/statistic/statistics-reviews.html'

	context = {}
	return render(request, template, context)