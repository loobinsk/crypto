from django.db import models
from django.contrib.auth.models import User
from groups.models import Student

class Question(models.Model):
	title = models.CharField(max_length=255)
	author = models.ForeignKey(User, on_delete=models.CASCADE)
	created = models.DateTimeField(auto_now_add=True)
	views = models.IntegerField(default=0)

	class Meta:
		ordering = ['-created']

class AnswerToQuestion(models.Model):
	question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name='answers_to_question')
	title = models.TextField()
	created = models.DateTimeField(auto_now_add=True)
	user = models.ForeignKey(User, on_delete=models.CASCADE)

	class Meta:
		ordering = ['-created']

class Announcement(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	title = models.CharField(max_length=255)
	created = models.DateTimeField(auto_now_add=True)
	views = models.IntegerField()
