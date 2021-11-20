from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from .models import Post
from django.db.models import Count


def profile(request, pk):
	template = 'auth_pages/profile.html'

	user = User.objects.get(pk=pk)
	posts = Post.objects.filter(active=True,user=user)[:20]
	students_count = request.user.courses.all().aggregate(Count('students'))
	students_count = list(students_count.values())[0]

	reviews_count = request.user.courses.all().aggregate(Count('reviews'))
	reviews_count = list(reviews_count.values())[0]


	for post in posts:
		post.views += 1
		post.save()

	if request.method == 'POST':
		text = request.POST['text']
		new_post = Post(text=text, user=user)
		new_post.save()
		return redirect('profile',pk=pk)


	context = {
		'user': user,
		'posts': posts,
		'students_count': students_count,
		'reviews_count': reviews_count,
		}
	return render(request, template, context)

def delete_post(request, pk, pk_pr):
	post = Post.objects.get(pk=pk)
	post.delete()
	return redirect('profile', pk=pk_pr)
