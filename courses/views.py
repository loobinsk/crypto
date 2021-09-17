from django.shortcuts import render
from .models import CategoryBySkill, CategoryByType
from .models import Course, CourseReview
from django.http import JsonResponse
from django.views.decorators.http import require_POST
from django.contrib.auth.decorators import login_required


def courses_list(request):
	template = 'homepage/catalog.html'

	all_courses = Course.objects.filter(active=True)
	all_categories_by_skill = CategoryBySkill.objects.all()
	all_categories_by_type = CategoryByType.objects.all()

	context = {
		'all_courses': all_courses,
		'all_categories': all_categories_by_skill,
		'all_categories_by_type': all_categories_by_type,
		'stars': range(1,6),
		}
	return render(request, template, context)

def courses_detail(request, pk):
	template = 'homepage/single.html'

	course = Course.objects.get(pk=3)
	course.views += 1
	course.save()
	reviews = CourseReview.objects.filter(course=course).all()

	context = {
		'course': course,
		'reviews': reviews,
		'stars': range(1,6),
		}
	return render(request, template, context)


@login_required
@require_POST
def review_like(request):
	review_id = request.POST.get('id')
	print(review_id)
	action = request.POST.get('action')
	if review_id and action:
		try:
			review = CourseReview.objects.get(id=review_id)
			if action == 'like':
				review.likes.add(request.user)
			else:
				review.likes.remove(request.user)
			return JsonResponse({'status':'ok'})
		except:
			pass
	return JsonResponse({'status':'ok'})