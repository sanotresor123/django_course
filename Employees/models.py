from django.db import models

# Create your models here.

class Employee(models.Model):
    first_name   = models.CharField(max_length = 50)
    last_name    = models.CharField(max_length = 50)
    sex          = models.CharField(max_length = 10)
    email        = models.CharField(max_length = 50) 
    password     = models.CharField(max_length = 50)
