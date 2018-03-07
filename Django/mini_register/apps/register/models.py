from __future__ import unicode_literals

from django.core.exceptions import ValidationError
from django.db import models
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

# Create your models here.
def validateNameLength(value):
    if len(value) < 2:
        raise ValidationError(
            '{} must be more than 2 characters'.format(value)
        )
def validatePasswordLength(value):
    if len(value) < 8:
        raise ValidationError(
            '{} must be more than 8 characters'.format(value)
        )

def validateEmail(value):
    if not EMAIL_REGEX.match(value):
        raise ValidationError(
            'Not a valid email!'
        ) 

def validateConfirmPW(value):
    if value != password:
        raise ValidationError(
            'Password and confirmation do not match!'
        )


class Users(models.Model):
    first_name = models.CharField(max_length=50, validators =[validateNameLength])
    last_name = models.CharField(max_length=50, validators =[validateNameLength])
    email = models.EmailField(validators =[validateEmail])
    password = models.CharField(max_length=100, validators =[validatePasswordLength])
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
