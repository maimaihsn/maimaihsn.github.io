from django.shortcuts import render
from .models import Illustration

def home(request):
    illustrations = Illustration.objects.all()
    return render(request, 'index.html', {'illustrations': illustrations})
    
def gallery(request):
    illustrations = Illustration.objects.all()
    return render(request, 'gallery.html', {'illustrations': illustrations})