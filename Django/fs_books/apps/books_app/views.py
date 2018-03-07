from django.shortcuts import render, HttpResponse, redirect
from .models import Books

# Create your views here.
def index(request):
    context = {
        "books" : Books.objects.all()
    }
    print context['books']
    return render(request, 'books_app/index.html', context)

def add_book(request):
    title = request.POST['title']
    category = request.POST['category']
    author = request.POST['author']
    Books.objects.create(title = title, category = category, author = author)
    return redirect('/')