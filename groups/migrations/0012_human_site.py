# Generated by Django 3.0 on 2021-11-05 08:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('groups', '0011_auto_20211105_0814'),
    ]

    operations = [
        migrations.AddField(
            model_name='human',
            name='site',
            field=models.TextField(blank=True, null=True),
        ),
    ]
