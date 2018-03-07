from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Books(models.Model):
    title = models.CharField(max_length=255)
    category = models.CharField(max_length=100)
    author = models.CharField(max_length=255)
    