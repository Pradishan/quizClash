# Generated by Django 5.0.1 on 2024-01-07 10:14

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        (
            "quizclashBackend",
            "0003_remove_user_firstname_remove_user_lastname_and_more",
        ),
    ]

    operations = [
        migrations.AlterField(
            model_name="user",
            name="is_active",
            field=models.BooleanField(default=True),
        ),
    ]