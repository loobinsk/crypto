# Generated by Django 3.0 on 2021-09-15 15:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0006_course_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='views',
            field=models.IntegerField(default=144, verbose_name='кол-во просмотров'),
            preserve_default=False,
        ),
    ]
