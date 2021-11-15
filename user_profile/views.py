from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from .models import Post

def profile(request, pk):
	template = 'auth_pages/profile.html'

	user = User.objects.get(pk=pk)
	posts = Post.objects.filter(active=True,user=user)[:20]
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
		}
	return render(request, template, context)

def delete_post(request, pk, pk_pr):
	post = Post.objects.get(pk=pk)
	post.delete()
	return redirect('profile', pk=pk_pr)
