from django.contrib import admin
from .models import Question, AnswerToQuestion, Announcement


admin.site.register(Question)
admin.site.register(AnswerToQuestion)
admin.site.register(Announcement)
