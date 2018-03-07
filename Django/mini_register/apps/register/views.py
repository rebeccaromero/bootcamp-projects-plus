from django.shortcuts import render, HttpResponse, redirect
from .forms import RegisterForm, LoginForm
from django.core.urlresolvers import reverse
from .models import Users
from django.contrib.auth import authenticate, login


# Create your views here.
def index(request):
    users = Users.objects.all()
    for user in users:
        print user.first_name
    form1 = RegisterForm()
    form2 = LoginForm()
    context = { 
        "regForm" : form1,
        "loginForm" : form2
    }
    return render(request, 'register/index.html', context)

def register(request):
    if request.method == "POST":
        bound_form = RegisterForm(request.POST)
        print bound_form.is_valid()
        print bound_form.errors
        create_user(request.POST)
    return redirect(reverse('main_page'))
    
def create_user(postData):
    print postData['first_name']
    Users.objects.create(first_name=postData['first_name'], last_name = postData['last_name'], email = postData['email'], password = postData['password'])
    return redirect(reverse('main_page'))

def login(request):
    if request.method == "POST":
        bound_form = LoginForm(request.POST)
        email = request.POST['email']
        password = request.POST['password']
        user = authenticate(email = email, password = password)
        print bound_form.is_valid()
        print user
        if user is not None:
            login(request, user)
            return redirect(reverse('success_page'))
        else:
            print bound_form.errors
            return redirect(reverse('main_page'))

def success(request):
    users = Users.objects.filter(id = request.session['id'])
    context = {
        'users' : users
    }
    return render(request, 'register/success.html', context)