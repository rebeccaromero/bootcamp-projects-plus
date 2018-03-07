from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'portfolio_app/index.html')

def tests(request):
    print (request.method)
    return render(request, 'portfolio_app/show_tests.html')