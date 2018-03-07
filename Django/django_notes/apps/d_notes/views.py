from django.shortcuts import render, HttpResponse, redirect
from .models import Notes

# Create your views here.

def index(request):
    context = {
        'notes' : Notes.objects.all()
    }
    #Notes.objects.all().delete()
    return render(request, 'd_notes/index.html', context)

def add_note(request):
    Notes.objects.create(content=request.POST['content'])
    context = {
        'notes' : Notes.objects.all()
    }
    return render(request, 'd_notes/note_index.html', context)