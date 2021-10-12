from django.shortcuts import render
from courses.models import CategoryByType, CategoryBySkill
from courses.models import Course, CourseReview
from groups.models import Teacher, Student


def homepage(request):
	template = 'index.html'


	all_courses = Course.objects.filter(active=True).order_by('-views')

	ct_type = request.GET.get('categorybytype')
	ct_skill = request.GET.get('categorybyskill')
	if ct_skill == 'all':
		ct_skill = None;
	if ct_type == 'all':
		ct_type = None;
	if ct_type != None and ct_skill != None: 
		all_courses = Course.objects.filter(active=True,
											category_by_skill=ct_skill,
											category_by_type=ct_type,
											).order_by('-views')
	elif ct_type != None: 
		all_courses = Course.objects.filter(active=True,
											category_by_type=ct_type,
											).order_by('-views')
	elif ct_skill != None:
		all_courses = Course.objects.filter(active=True,
											category_by_skill=ct_skill,
											).order_by('-views')		

	#coruses

	all_categories_type_user = CategoryByType.objects.all()
	all_categories_skills = CategoryBySkill.objects.all()

	#Teacher
	all_teachers = Teacher.objects.all()

	if ct_skill == None:
		ct_skill = 'All'
	else:
		ct_skill = CategoryBySkill.objects.get(pk=ct_skill)

	if ct_type == None:
		ct_type = 'All'
	else:
		ct_type = CategoryByType.objects.get(pk=ct_type)

	context = {
		#star
		'stars': range(1,6),

		#courses
		'all_courses': all_courses,
		'all_categories_type_user': all_categories_type_user,
		'all_categories_skills': all_categories_skills,

		'ct_type': ct_type,
		'ct_skill': ct_skill,

		#teachers
		'all_teachers': all_teachers,
		}
	return render(request, template, context)

def about(request):
	template = 'homepage/about.html'

	course_count = Course.objects.all().count()
	teacher_count = Teacher.objects.all().count()
	student_count = Student.objects.all().count()
	all_categories_skills = CategoryBySkill.objects.all()

	context = {
			'course_count': course_count,
			'teacher_count': teacher_count,
			'student_count': student_count,
			'all_categories_skills': all_categories_skills,
		}
	return render(request, template, context)

def reviews(request):
	template = 'homepage/review.html'

	all_categories = CategoryBySkill.objects.all()
	all_reviews = CourseReview.objects.all()

	context = {
		'all_categories': all_categories,
		'all_reviews': all_reviews,
		'stars': range(1, 6),
		}
	return render(request, template, context)