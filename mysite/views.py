from django.shortcuts import render

def home(request):
    return render(request, 'index.html')

def gallery(request):
    return render(request, 'gallery.html')  # gallery.html も必要