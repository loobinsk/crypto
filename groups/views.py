from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate
from django.contrib.auth import update_session_auth_hash
from django.contrib.auth import login as auth_login
from django.contrib.auth import logout as logout_system
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_protect
from django.shortcuts import render, redirect, get_object_or_404
from .models import Student



def register(request):
	template = 'account/register.html'
	error = ''
	if request.method == 'POST':
		username = request.POST['username']
		first_name = request.POST['first_name']
		last_name = request.POST['last_name']
		image = request.FILES['image']
		email = request.POST['email']
		password = request.POST['password']
		password2 = request.POST['password2']
		if password == password2:
			try:
				new_user = User.objects.create_user(username=username, password=password)
				new_user.save()
				new_student = Student(
								user=new_user,
								first_name=first_name,
								last_name=last_name,
								email=email,
								image=image,)
				new_student.save()
				auth_login(request, new_user)
				return redirect('homepage')
			except:
				error = 'пользователь с таким логином уже существует.'
		else:
			error = 'Пароли не совпадают.'

	return render(request, template, {'error': error})

def login(request):
	template = 'account/login.html'
	error = None
	if request.user.is_authenticated:
		return redirect('homepage')
	else:
		if request.method == 'POST':
			username = request.POST['username']
			password = request.POST['password']
			user = authenticate(username=username, password=password)
			if user is not None:
				if user.is_active:
					auth_login(request, user)
					return redirect('homepage')
			else:
				error = True
		return render(request, template, {'error': error})

def logout(request):
	logout_system(request)
	return redirect('homepage')