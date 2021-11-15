from django.urls import path
from .views import settings, account
from .views import delete_image, change_mail
from .views import change_password, account_notations
from .views import account_messages, account_close
from .views import delete_account, payments

urlpatterns = [
    path('', settings, name='settings'),
    path('account/', account, name='account'),
    path('account-notations/', account_notations, name='account_notations'),
    path('account-messages/', account_messages, name='account_messages'),
    path('account_close/', account_close, name='account_close'),

    path('payments/', payments, name='payments'),

    path('delete-account/', delete_account, name='delete_account'),
    path('delete-image/', delete_image, name='delete_profile_image'),
    path('change-mail/', change_mail, name='change_mail'),
    path('change-password/', change_password, name='change_password'),
    path('account/<error_mail>/', account, name='account_error')
]