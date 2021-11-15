from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from groups.models import Human, Teacher


def settings(request):
	template = 'auth_pages/settings/settings.html'

	if request.method == 'POST':
		try:
			show_profile = request.POST['show_profile']
			show_profile = True
		except:
			show_profile = False

		try:
			show_courses = request.POST['show_courses']
			show_courses = True
		except:
			show_courses = False

		first_name = request.POST['first_name']
		last_name = request.POST['last_name']
		main_competence = request.POST['main_competence']
		biography = request.POST['biography']
		language = request.POST['language']
		country = request.POST['country']
		site = request.POST['site']

		try:
			image = request.FILES['image']
		except:
			image = None

		user = User.objects.get(pk=request.user.pk)
		user.first_name=first_name
		user.last_name=last_name
		user.save()

		profile = Human.objects.get(user=user)
		profile.show_profile=show_profile
		profile.show_courses=show_courses
		profile.biography=biography
		profile.language=language
		profile.country=country
		profile.site=site
		if image:
			profile.image=image

		profile.save()

		teacher = Teacher.objects.get(human=profile)
		teacher.main_competence=main_competence
		teacher.save()

		return redirect('settings')


	context = {}
	return render(request, template, context)


def account(request, error_mail=None):
	template = 'auth_pages/settings/settings-profile.html'

	context = {
		'error': error_mail
		}
	return render(request, template, context)

def account_notations(request):
	template = 'auth_pages/settings/settings-notations.html'

	context = {}
	return render(request, template, context)

def account_messages(request):
	template = 'auth_pages/settings/settings-messages.html'

	context = {}
	return render(request, template, context)

def account_close(request):
	template = 'auth_pages/settings/settings-close.html'

	context = {}
	return render(request, template, context)

def payments(request):
	template = 'auth_pages/settings/settings-payments.html'

	context = {}
	return render(request, template, context)

def delete_image(request):
	profile = Human.objects.get(user=request.user)
	profile.image=None
	profile.save()
	return redirect('settings')

def change_mail(request):
	user = request.user
	mail = request.POST['email']
	password = request.POST['password']
	if user.check_password(password):
		user.email = mail
		user.save()
		return redirect('account')
	else:
		return redirect('account_error', error_mail='Вы указали неверный пароль')

def delete_account(request):
	request.user.delete()
	return redirect('logout')

def change_password(request):
	user = request.user
	password1 = request.POST['password1']
	password2 = request.POST['password2']
	password3 = request.POST['password3']
	if user.check_password(password1):
		if password2 == password3:			
			user.set_password(password2)
			user.save()
			return redirect('account')
		else:
			return redirect('account_error', error_mail='Пароли не совпадают')
	else:
		return redirect('account_error', error_mail='Ваш текущий пароль не совпадает с указанным')
