from django.contrib import admin
from .models import CategoryByType
from .models import CategoryBySkill
from .models import Course
from .models import CourseReview 

admin.site.register(CategoryByType)
admin.site.register(CategoryBySkill)

class CourseAdmin(admin.ModelAdmin):
	list_display = ['category_by_type', 'category_by_skill', 'name', 'author', 'hourse', 'create_date', 'update_date']
	list_filter = ['category_by_type', 'category_by_skill',]
	search_fields = ['name', 'author', 'category_by_type', 'category_by_skill']

admin.site.register(Course, CourseAdmin)

class ReviewAdmin(admin.ModelAdmin):
	list_display = ['student', 'course', 'text', 'rating']
	list_filter = ['student', 'course', 'rating',]
	search_fields = ['text']

admin.site.register(CourseReview, ReviewAdmin)
