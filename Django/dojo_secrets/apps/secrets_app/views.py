from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from .models import Users, Secrets, Likes
import bcrypt
from django.contrib.auth import authenticate, login


# Create your views here.
def index(request):
    print Users.objects.all()
    return render(request, 'secrets_app/index.html')

def register(request):
    first_name = request.POST['first_name']
    last_name = request.POST['last_name']
    salt = bcrypt.gensalt()
    email = request.POST['email']
    hashed_password = bcrypt.hashpw(request.POST['password'].encode(encoding='utf-8', errors='strict'), salt)
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
        return redirect('/secrets')

def login_user(request):
    email = request.POST['email']
    password = request.POST['password']
    user = authenticate(email=email, password=password)
    if user is not None:
        login(request, user)
        return redirect('/secrets')
        # Redirect to a success page.
        
    else:
        print 'no'
        return redirect('/')
        #Return an 'invalid login' error message.
    # email = request.POST['email']
    # errors = Users.objects.login_validator(request.POST)
    # if len(errors):
    #     for tag,error in errors.iteritems():
    #         messages.add_message(request, messages.ERROR, str(error))
    #     return redirect('/')
    # else:
    #     request.session['id'] = Users.objects.get(email = email).id
    #     messages.add_message(request, messages.SUCCESS, "Successfully logged in!")
    #     return redirect('/secrets')

def secrets(request):
    print ('*'*50)
    print request.session['id']
    db_id = request.session['id']
    context = {
        'first_name': Users.objects.get(id = db_id).first_name,
        'secrets': Secrets.objects.all()
    }
    return render(request, 'secrets_app/secrets.html', context)

def logout(request):
    del request.session['id']
    return redirect ('/')

def blab(request):
    content = request.POST['secret']
    Secrets.objects.create(content=content, user=Users.objects.get(id=request.session['id']), like_count=0)
    return redirect('/secrets')

def popular(request):
    db_id = request.session['id']
    context = {
        'first_name': Users.objects.get(id = db_id).first_name,
        'secrets': Secrets.objects.all().order_by('-like_count')
    }
    return render(request, 'secrets_app/popular.html', context)

def like(request):
    user_id = request.POST['user_id']
    secret_id = request.POST['secret_id']
    errors = Likes.objects.like_validator(request.POST)
    if len(errors):
        for tag,error in errors.iteritems():
            messages.add_message(request, messages.ERROR, str(error))
        return redirect('/secrets')
    else:
        curr_secret = Secrets.objects.get(id=secret_id)
        Likes.objects.create(user=Users.objects.get(id=user_id), secret=Secrets.objects.get(id=secret_id))
        curr_secret.like_count = curr_secret.like_count + 1
        curr_secret.save()
    return redirect('/secrets')

def delete(request):
    secret_id = request.POST['secret_id']
    Secrets.objects.get(id = secret_id).delete()
    Likes.objects.filter(secret=secret_id).delete()
    return redirect('/secrets')