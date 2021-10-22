from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import Question, AnswerToQuestion, Announcement

@login_required
def news(request):
	template = 'auth_pages/news.html'

	all_questions = Question.objects.all()[:50]
	all_announcement = Announcement.objects.filter(user=request.user)

	if request.method == 'POST':
		question = request.POST['text_question']
		new_qs = Question(title=question, author=request.user)
		new_qs.save()
		return redirect('news')

	context = {
		'all_announcement': all_announcement,
		'all_questions': all_questions,
	}
	return render(request, template, context)

def delete_question(request, pk):
	quetsion = Question.objects.get(pk=pk)
	quetsion.delete()
	return redirect('news')