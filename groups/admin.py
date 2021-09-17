from django.contrib import admin
from .models import Student, Teacher


class StudentAdmin(admin.ModelAdmin):
	list_display = ['user', 'first_name', 'last_name', 'email', 'create_date', 'update_date']
	list_filter = ['user', 'create_date', 'update_date',]
	search_fields = ['user', 'first_name', 'last_name', 'email', 'biography']

admin.site.register(Student, StudentAdmin)

class TeacherAdmin(admin.ModelAdmin):
	list_display = ['user', 'first_name', 'last_name', 'email', 'create_date', 'update_date', 'main_competence', 'country']
	list_filter = ['user', 'create_date', 'update_date',]
	search_fields = ['user', 'first_name', 'last_name', 'email', 'biography']

admin.site.register(Teacher, TeacherAdmin)

