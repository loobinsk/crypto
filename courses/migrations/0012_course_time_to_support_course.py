# Generated by Django 3.0 on 2021-11-20 08:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0011_auto_20211113_1400'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='time_to_support_course',
            field=models.TextField(default=1),
            preserve_default=False,
        ),
    ]
