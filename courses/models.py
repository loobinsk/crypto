from django.db import models
from django.contrib.auth.models import User
from groups.models import Student, Teacher
from django.urls import reverse
from django.utils.translation import gettext_lazy as _

class CategoryByType(models.Model):
	name = models.CharField(_('Название'), max_length=255)

	def __str__(self):
		return self.name

class CategoryBySkill(models.Model):
	name = models.CharField(_('Название'), max_length=255)

	def __str__(self):
		return self.name

class Course(models.Model):
	category_by_type = models.ForeignKey(CategoryByType, on_delete=models.CASCADE, blank=True, null=True)
	category_by_skill = models.ForeignKey(CategoryBySkill, on_delete=models.CASCADE, blank=True, null=True)
	name = models.CharField(_('Название'),max_length=255)
	author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='courses')
	students = models.ManyToManyField(Student, related_name='students', blank=True, null=True)
	description = models.TextField(_('Описание'), blank=True, null=True)
	price = models.IntegerField(blank=True, null=True)
	image = models.ImageField(_('Постер'), upload_to='course/posters', blank=True, null=True)
	create_date = models.DateField(_('Дата создания'),auto_now_add=True)
	update_date = models.DateField(_('Дата обновления'),auto_now=True)
	hourse = models.IntegerField(_('Кол-во часов'), default=0)
	views = models.IntegerField(_('кол-во просмотров'), default=0)
	active = models.BooleanField(default=False)
	time_to_support_course = models.TextField(default=0)

	def get_average_rating(self):
		all_review = self.reviews.all()
		count_review = all_review.count()
		count = 0
		for i in all_review:
			count += i.rating

		try:
			total = count/count_review
		except ZeroDivisionError: 
			return 0

		return round(total,1)

	def get_percent_of_reviews(self):
		list_stars = []
		all_stars = self.reviews.all().count()
		for raiting in reversed(range(1, 6)):
			_list = []
			stars = self.reviews.filter(rating=raiting)
			stars = stars.count()
			try:
				percentage = int(stars*100/all_stars)
			except ZeroDivisionError:
				percentage = 0
			_list.append(raiting)
			_list.append(percentage)
			_list.append(stars)
			list_stars.append(_list)

		return list_stars



	def get_absolute_url(self):
		return reverse('courses_detail',
						args=[self.pk])

	def __str__(self):
		return self.name



class CourseReview(models.Model):
	course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='reviews')
	rating = models.IntegerField(_('Оценка'),)
	text = models.TextField(_('Текст'),)
	create_date = models.DateField(_('Дата создания'),auto_now_add=True)
	likes = models.ManyToManyField(User,
                                        related_name='review_liked',
                                        blank=True)
	dislikes = models.ManyToManyField(User,
                                        related_name='review_disliked',
                                        blank=True)
	student = models.ForeignKey(Student, on_delete=models.CASCADE)

	def __str__(self):
		return self.text

