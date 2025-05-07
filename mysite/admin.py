from django.contrib import admin
from django.utils.html import format_html
from .models import Post, Tag, Interest

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('caption', 'user', 'created_at', 'image_preview')
    readonly_fields = ('image_preview',)  # 詳細画面にも表示する場合

    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" width="120" height="120" style="object-fit: cover;" />', obj.image.url)
        return "-"
    image_preview.short_description = '画像プレビュー'

admin.site.register(Tag)
admin.site.register(Interest)
