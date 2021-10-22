from django.contrib import admin
from .models import Student, Teacher


class StudentAdmin(admin.ModelAdmin):
	list_display = ['user']
	list_filter = ['user']
	search_fields = ['user', 'biography']

admin.site.register(Student, StudentAdmin)

class TeacherAdmin(admin.ModelAdmin):
	list_display = ['user','main_competence', 'country']
	list_filter = ['user',]
	search_fields = ['user', 'biography']

admin.site.register(Teacher, TeacherAdmin)

