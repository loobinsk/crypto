# Generated by Django 3.0 on 2021-09-16 15:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('groups', '0002_auto_20210912_0840'),
    ]

    operations = [
        migrations.AlterField(
            model_name='investor',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='students_photo/', verbose_name='Аватар'),
        ),
        migrations.AlterField(
            model_name='student',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='students_photo/', verbose_name='Аватар'),
        ),
        migrations.AlterField(
            model_name='teacher',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='students_photo/', verbose_name='Аватар'),
        ),
    ]
