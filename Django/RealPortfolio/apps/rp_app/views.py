from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'rp_app/index.html')

def projects(request):
    return render(request, 'rp_app/projects.html')

def about(request):
    return render(request, 'rp_app/about.html')

def tests(request):
    return render(request, 'rp_app/tests.html')
