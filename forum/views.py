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

def question_detail(request, pk):
	template = 'auth_pages/question.html'

	question = Question.objects.get(pk=pk)
	question.views += 1
	question.save()

	if request.method == 'POST':
		title = request.POST['title']
		new_answr_to_qs = AnswerToQuestion(
			question=question,
			user=request.user,
			title=title,
		)
		new_answr_to_qs.save()
		return redirect('question_detail', pk)

	context = {
		'question': question,
	}
	return render(request, template, context)

def delete_question(request, pk):
	quetsion = Question.objects.get(pk=pk)
	quetsion.delete()
	return redirect('news')