# Generated by Django 3.0 on 2021-10-21 10:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('forum', '0002_auto_20211021_0954'),
    ]

    operations = [
        migrations.AlterField(
            model_name='answertoquestion',
            name='question',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='answers_to_question', to='forum.Question'),
        ),
    ]