from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Products(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(1255)
    weight = models.IntegerField()
    price = models.IntegerField()
    cost = models.IntegerField()
    category = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)