# Generated by Django 3.0 on 2021-09-15 13:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0005_auto_20210915_1254'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='price',
            field=models.IntegerField(default=12),
            preserve_default=False,
        ),
    ]
