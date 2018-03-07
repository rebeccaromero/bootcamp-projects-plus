from django.shortcuts import render, HttpResponse, redirect
from .models import Users
from django.contrib import messages

# Create your views here.
def index(request):
    return render(request, 'validate_app/index.html')

def check_username(request):
    username = request.POST['username']
    errors = Users.objects.basic_validator(request.POST)
    if len(errors):
        for tag, error in errors.iteritems():
            print tag, error
        messages.add_message(request, messages.ERROR, 'Username is not valid!')
        return redirect('/')
    else:
        user = Users.objects.create(username = username)
        messages.add_message(request, messages.SUCCESS, 'The username you entered ' + username + ' is valid. Thank You!')
        return redirect('/success')

def delete(request):
    Users.objects.get(username = request.POST['username']).delete()
    return redirect('/success')

def success(request):
    context= {
        'users' : Users.objects.all()
    }
    return render(request, 'validate_app/success.html', context)