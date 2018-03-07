from django.shortcuts import render

def index(request):
    print ("*"*100)
    return render(request, "first_app/index.html" )
    
