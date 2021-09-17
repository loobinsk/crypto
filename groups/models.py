from django.db import models
from django.contrib.auth.models import User
from django.utils.translation import gettext_lazy as _


class Human(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	first_name = models.CharField(_('Имя'),max_length=255, blank=True, null=True)
	last_name = models.CharField(_('Фамилия'),max_length=255, blank=True, null=True)
	create_date = models.DateField(_('Дата создания'),auto_now_add=True)
	update_date = models.DateField(_('Дата обновления'),auto_now=True)
	email = models.EmailField(_('Почта'),blank=True, null=True)
	image = models.ImageField(_('Аватар'), upload_to='students_photo/' ,blank=True, null=True)
	biography = models.TextField(_('О себе'), blank=True)
    
	class Meta:
		abstract = True

	def __str__(self):
		return f'{self.first_name} {self.last_name}'

	def get_full_name(self):
		return f'{self.first_name} {self.last_name}'


class Student(Human):
	work_experience = models.TextField(_('Опыт работы'), blank=True)

class Teacher(Human):
	main_competence = models.CharField(_('Основная компетенция'), max_length=255, blank=True)
	language = models.CharField(_('Язык'), max_length=255, blank=True)
	country = models.CharField(_('Страна'), max_length=255, blank=True)



class Investor(Human):
	pass