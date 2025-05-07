from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from mysite import views  # ← 必須！

urlpatterns = [
    path('admin/', admin.site.urls), 
    path('', views.home),
    path('gallery/', views.gallery, name='gallery'),  # ← これが必要！
]

# メディアファイルのURLルーティング
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

    # 本番環境でも static が配信されるように
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)