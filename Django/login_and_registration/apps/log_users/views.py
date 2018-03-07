from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from .models import Users
import md5

# Create your views here.
def index(request):
  return render(request, 'log_users/index.html')

def register(request):
  first_name = request.POST['first_name']
  last_name = request.POST['last_name']
  email = request.POST['email']
  hashed_password = md5.new(request.POST['password']).hexdigest()
  confirm_pw = request.POST['confirm_pw']
  errors = Users.objects.register_validator(request.POST)
  if len(errors):
    for tag,error in errors.iteritems():
      messages.add_message(request, messages.ERROR, str(error))
    return redirect('/')
  else: 
    user = Users.objects.create(first_name = first_name, last_name = last_name, email = email, password = hashed_password)
    messages.add_message(request, messages.SUCCESS, "Successfully registered!")
    request.session['id'] = Users.objects.get(email = email).id
    return redirect('/success')

def login(request):
  email = request.POST['email']
  messages.add_message(request, messages.SUCCESS, "Successfully logged in!")
  request.session['id'] = Users.objects.get(email = email).id
  print request.session['id']   
  return redirect('/success')

def success(request):
  return render(request, 'log_users/success.html')

def logout(request):
  del request.session['id']
  print Users.objects.all()
  return redirect ('/')