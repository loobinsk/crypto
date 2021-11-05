from django.contrib import admin
from .models import Student, Teacher, Human


class HumanAdmin(admin.ModelAdmin):
	list_display = ['user', 'get_full_name']

admin.site.register(Human,HumanAdmin)


class StudentAdmin(admin.ModelAdmin):
	list_display = ['human']
	list_filter = ['human']
	search_fields = ['work_experience']

admin.site.register(Student, StudentAdmin)

class TeacherAdmin(admin.ModelAdmin):
	list_display = ['human','main_competence',]
	list_filter = ['human',]
	search_fields = ['human', 'main_competence']

admin.site.register(Teacher, TeacherAdmin)

