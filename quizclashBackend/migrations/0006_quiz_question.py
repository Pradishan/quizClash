# Generated by Django 5.0.1 on 2024-01-13 16:37

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("quizclashBackend", "0005_alter_user_address"),
    ]

    operations = [
        migrations.CreateModel(
            name="Quiz",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=200, unique=True)),
                ("description", models.CharField(max_length=200)),
                ("level", models.CharField(max_length=200)),
                ("xp", models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name="Question",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("number", models.IntegerField()),
                ("question", models.CharField(max_length=255)),
                ("answer", models.CharField(max_length=200)),
                ("option1", models.CharField(max_length=200)),
                ("option2", models.CharField(max_length=200)),
                ("option3", models.CharField(max_length=200)),
                ("option4", models.CharField(max_length=200)),
                (
                    "quiz",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="quizclashBackend.quiz",
                    ),
                ),
            ],
        ),
    ]