# Generated by Django 3.0 on 2021-10-22 12:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('groups', '0006_auto_20211021_1233'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='investor',
            name='biography',
        ),
        migrations.RemoveField(
            model_name='investor',
            name='create_date',
        ),
        migrations.RemoveField(
            model_name='investor',
            name='email',
        ),
        migrations.RemoveField(
            model_name='investor',
            name='first_name',
        ),
        migrations.RemoveField(
            model_name='investor',
            name='image',
        ),
        migrations.RemoveField(
            model_name='investor',
            name='last_name',
        ),
        migrations.RemoveField(
            model_name='investor',
            name='update_date',
        ),
        migrations.RemoveField(
            model_name='student',
            name='create_date',
        ),
        migrations.RemoveField(
            model_name='student',
            name='email',
        ),
        migrations.RemoveField(
            model_name='student',
            name='first_name',
        ),
        migrations.RemoveField(
            model_name='student',
            name='last_name',
        ),
        migrations.RemoveField(
            model_name='student',
            name='update_date',
        ),
        migrations.RemoveField(
            model_name='teacher',
            name='create_date',
        ),
        migrations.RemoveField(
            model_name='teacher',
            name='email',
        ),
        migrations.RemoveField(
            model_name='teacher',
            name='first_name',
        ),
        migrations.RemoveField(
            model_name='teacher',
            name='last_name',
        ),
        migrations.RemoveField(
            model_name='teacher',
            name='update_date',
        ),
    ]
