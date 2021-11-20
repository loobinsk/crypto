from django.shortcuts import render, redirect
from courses.models import CategoryBySkill, Course

def create_course_one(request):
	template = 'auth_pages/create-course.html'
	categoires = CategoryBySkill.objects.all()

	if request.method == 'POST':
		name = request.POST['name']
		time_to_support = request.POST['liTime']
		new_course = Course(
				name=name,
				time_to_support_course=time_to_support,
				author=request.user,
				)
		new_course.save()
		return redirect('create_course_two', pk=new_course.pk)
		

	context={
		'categoires':categoires,
		}
	return render(request, template, context)

def create_course_two(request, pk):
	template = 'auth_pages/planning-course.html'

	course = Course.objects.get(pk=pk)

	context = {'course':course}
	return render(request, template, context)

