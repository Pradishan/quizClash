from django.db import models

class User(models.Model):
    firstname = models.CharField(max_length = 100)
    lastname = models.CharField(max_length = 100)
    username = models.CharField(max_length = 100)
    email = models.CharField(max_length = 150)
    address = models.CharField(max_length = 255)
    phone = models.IntegerField()
