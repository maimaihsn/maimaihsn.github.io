#mysite/views.py

from django.shortcuts import render
from mysite.models import Post

def home(request):
    return render(request, 'index.html')

def gallery(request):
    return render(request, 'gallery.html')  # gallery.html も必要

def index_view(request):
    posts = Post.objects.all().order_by('-created_at')[:5]  # 最新5件だけ取得
    return render(request, 'index.html', {'illustrations': posts})

def gallery_view(request):
    posts = Post.objects.all().order_by('-created_at')  # すべての投稿を取得
    return render(request, 'gallery.html', {'illustrations': posts})