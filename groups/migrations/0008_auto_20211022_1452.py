# Generated by Django 3.0 on 2021-10-22 14:52

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
from datetime import datetime


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('groups', '0007_auto_20211022_1219'),
    ]

    operations = [
        migrations.AddField(
            model_name='investor',
            name='biography',
            field=models.TextField(blank=True, verbose_name='О себе'),
        ),
        migrations.AddField(
            model_name='investor',
            name='create_date',
            field=models.DateField(auto_now_add=True, default=datetime.now(), verbose_name='Дата создания'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='investor',
            name='email',
            field=models.EmailField(blank=True, max_length=254, null=True, verbose_name='Почта'),
        ),
        migrations.AddField(
            model_name='investor',
            name='first_name',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Имя'),
        ),
        migrations.AddField(
            model_name='investor',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='students_photo/', verbose_name='Аватар'),
        ),
        migrations.AddField(
            model_name='investor',
            name='last_name',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Фамилия'),
        ),
        migrations.AddField(
            model_name='investor',
            name='update_date',
            field=models.DateField(auto_now=True, verbose_name='Дата обновления'),
        ),
        migrations.AddField(
            model_name='investor',
            name='user',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='investor_related', to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='student',
            name='create_date',
            field=models.DateField(auto_now_add=True, default=datetime.now(), verbose_name='Дата создания'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='student',
            name='email',
            field=models.EmailField(blank=True, max_length=254, null=True, verbose_name='Почта'),
        ),
        migrations.AddField(
            model_name='student',
            name='first_name',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Имя'),
        ),
        migrations.AddField(
            model_name='student',
            name='last_name',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Фамилия'),
        ),
        migrations.AddField(
            model_name='student',
            name='update_date',
            field=models.DateField(auto_now=True, verbose_name='Дата обновления'),
        ),
        migrations.AddField(
            model_name='teacher',
            name='create_date',
            field=models.DateField(auto_now_add=True, default=datetime.now(), verbose_name='Дата создания'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='teacher',
            name='email',
            field=models.EmailField(blank=True, max_length=254, null=True, verbose_name='Почта'),
        ),
        migrations.AddField(
            model_name='teacher',
            name='first_name',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Имя'),
        ),
        migrations.AddField(
            model_name='teacher',
            name='last_name',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Фамилия'),
        ),
        migrations.AddField(
            model_name='teacher',
            name='update_date',
            field=models.DateField(auto_now=True, verbose_name='Дата обновления'),
        ),
        migrations.AlterField(
            model_name='student',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='student_related', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='teacher',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='teacher_related', to=settings.AUTH_USER_MODEL),
        ),
    ]