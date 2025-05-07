from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from mysite.views import home, gallery_view  # ✅ views から直接必要な関数を import
from mysite import views

urlpatterns = [
    path('', views.index_view, name='home'),  # トップページは index_view
    path('gallery/', views.gallery_view, name='gallery'),  # 全件表示ページ
    path('admin/', admin.site.urls),
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
