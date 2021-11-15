from django.db import models
from django.contrib.auth.models import User
from django.utils.translation import gettext_lazy as _


class Human(models.Model):
	user = models.OneToOneField(User, related_name='human', on_delete=models.CASCADE)
	number = models.TextField(blank=True, null=True)
	update_date = models.DateField(_('Дата обновления'), auto_now=True)
	image = models.ImageField(_('Аватар'), upload_to='students_photo/' ,blank=True, null=True)
	show_profile = models.BooleanField(default=True)
	show_courses = models.BooleanField(default=False)
	biography = models.TextField(_('О себе'), blank=True)
	language = models.CharField(_('Язык'), max_length=255, blank=True)
	country = models.CharField(_('Страна'), max_length=255, blank=True)


	#sites
	site = models.TextField(blank=True, null=True)
	telegram = models.TextField(blank=True, null=True)
	youtube = models.TextField(blank=True, null=True)
	twitter = models.TextField(blank=True, null=True)
	facebook = models.TextField(blank=True, null=True)
	instagram = models.TextField(blank=True, null=True)
	linkedin = models.TextField(blank=True, null=True)


	def __str__(self):
		return f'{self.user.first_name} {self.user.last_name}'

	def get_full_name(self):
		return f'{self.user.first_name} {self.user.last_name}'


class Student(models.Model):
	human = models.OneToOneField(Human, on_delete=models.CASCADE, related_name='student_human')
	work_experience = models.TextField(_('Опыт работы'), blank=True)

class Teacher(models.Model):
	subscribers = models.ManyToManyField(User)
	human = models.OneToOneField(Human, on_delete=models.CASCADE, related_name='teacher_human')
	main_competence = models.CharField(_('Основная компетенция'), max_length=255, blank=True)



class Investor(Human):
	pass