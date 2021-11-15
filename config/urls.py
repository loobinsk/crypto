from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from django.conf.urls.i18n import i18n_patterns


urlpatterns = i18n_patterns(
    path('', include('home.urls'), name='home'),
    path('dashboard/', include('home.auth_urls')),
    path('news/', include('forum.urls')),
    path('messages/', include('user_messages.urls')),
    path('tasks/', include('tasks.urls')),
    path('settings/', include('settings.urls')),
    path('profile/', include('user_profile.urls')),
    path('statistic/', include('statistic.urls')),


    path('rosetta/', include('rosetta.urls')),
    path('account/', include('groups.urls'), name='login_pages'),
    path('courses/', include('courses.urls'), name='catalog'),
    path('admin/', admin.site.urls),
    path('api/', include('courses.api.urls', namespace='api')),
)

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)