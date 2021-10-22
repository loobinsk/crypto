# Generated by Django 3.0 on 2021-10-22 12:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('groups', '0007_auto_20211022_1219'),
        ('forum', '0003_auto_20211021_1015'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='question',
            options={'ordering': ['-created']},
        ),
        migrations.RemoveField(
            model_name='question',
            name='user',
        ),
        migrations.AddField(
            model_name='question',
            name='student',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='groups.Student'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='question',
            name='views',
            field=models.IntegerField(default=0),
        ),
    ]