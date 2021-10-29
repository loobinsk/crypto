from django.shortcuts import render
from .models import Message, Dialogue
from django.contrib.auth.models import User


def messages(request):
	template = 'auth_pages/message.html'

	dialoges = Dialogue.objects.filter(sender=request.user)

	context = {
		'dialoges': dialoges,
		}
	return render(request, template, context)

def dialogue_detail(request, pk):
	template = 'auth_pages/message.html'


	dialoges = Dialogue.objects.filter(sender=request.user)
	dialogue = Dialogue.objects.get(pk=pk)
	dialogue.new_msg_count = 0
	dialogue.save()

	if request.method == 'POST':
		message = request.POST['msg_content']
		new_msg = Message(
			dialogue=dialogue,
			sender=request.user,
			msg_content=message,
			)
		new_msg.save()



	context = {
		'dialoges': dialoges,
		'dialogue': dialogue,
	}

	return render(request, template, context)