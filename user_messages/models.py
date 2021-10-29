from django.db import models
from django.contrib.auth.models import User


class Dialogue(models.Model):
	sender = models.ForeignKey(User, related_name="user_sender", on_delete=models.CASCADE)
	reciever = models.ForeignKey(User, related_name="user_reciever", on_delete=models.CASCADE)
	created = models.DateTimeField(auto_now_add=True)
	new_msg_count = models.IntegerField(default=0)

	def __str__(self):
		return f'{self.sender.student_related.get_full_name()} {self.reciever.student_related.get_full_name()}'

class Message(models.Model):
	dialogue = models.ForeignKey(Dialogue, related_name='messages', on_delete=models.CASCADE)
	sender = models.ForeignKey(User, related_name="user_sender2", on_delete=models.CASCADE)
	msg_content = models.TextField()
	created = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.msg_content