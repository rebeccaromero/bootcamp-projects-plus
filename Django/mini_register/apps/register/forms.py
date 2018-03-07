from django import forms
from django.forms import ModelForm
from .models import Users

# class RegisterForm(forms.ModelForm):
#     class Meta:
#         model = Users
#         fields = '__all__'
#         # fields = ['first_name', 'last_name', 'email', 'password']

class RegisterForm(forms.Form):
    first_name = forms.CharField(max_length=50)
    last_name = forms.CharField(max_length=50)
    email = forms.EmailField()
    password = forms.CharField(max_length=100, widget=forms.PasswordInput)
    confirm_pw = forms.CharField(max_length=100, widget=forms.PasswordInput)

class LoginForm(forms.Form):
    email = forms.EmailField()
    password = forms.CharField(max_length=100, widget=forms.PasswordInput)