from __future__ import unicode_literals
from django.core.validators import MinLengthValidator

from django.db import models

# Create your models here.
class UserManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        if len(postData['username']) < 5:
            errors["name"] = "Username should be more than 5 characters"
        return errors

class Users(models.Model):
    username = models.CharField(max_length=25, validators=[MinLengthValidator(8)])
    created_at = models.DateTimeField(auto_now_add=True)
    objects = UserManager()
