from __future__ import unicode_literals
from django.db import models
import re, bcrypt

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

# Create your models here.
class UserManager(models.Manager):
    def register_validator(self, postData):
        errors = {}
        success = {}
        email_exists = Users.objects.filter(email = postData['email'])
        if not postData["first_name"].isalpha():
            errors["first_name"] = "First name must contain only letters"
        if len(postData['first_name']) < 2:
            errors["first_name2"] = "First name should be longer than 2 characters"
        if not postData["last_name"].isalpha():
            errors["last_name"] = "Last name must contain only letters"
        if len(postData['last_name']) < 2:
            errors["last_name2"] = "Last name should be longer than 2 characters"
        if not EMAIL_REGEX.match(postData["email"]):
            errors["email"] = "Email is not valid"
        if email_exists:
            errors["email2"] = "Email already being used"
        if len(postData['password']) < 8:
            errors["password"] = "Password should be longer than 8 characters"
        if postData['password'] != postData["confirm_pw"]:
            errors["confirmation"] = "Password and password confirmation need to be matching"
        return errors

    def like_validator(self, postData):
        errors={}
        like_exists = Likes.objects.filter(user=postData['user_id'], secret=postData['secret_id'])
        if like_exists:
            errors['like'] = 'You have already liked this secret'
        return errors

class Users(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.first_name + ' ' + self.last_name
    objects = UserManager()

class Secrets(models.Model):
    content = models.CharField(max_length=255)
    user = models.ForeignKey(Users, related_name='secrets')
    like_count = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()

class Likes(models.Model):
    user = models.ForeignKey(Users, related_name='likes')
    secret = models.ForeignKey(Secrets, related_name='likes')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()