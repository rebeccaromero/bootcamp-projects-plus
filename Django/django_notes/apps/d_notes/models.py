from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Notes(models.Model):
    content = models.TextField(max_length=500)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)