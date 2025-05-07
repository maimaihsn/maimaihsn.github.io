from django.db import models

from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    # 追加フィールド
    interests = models.ManyToManyField('Interest', blank=True)
    following = models.ManyToManyField('self', symmetrical=False, related_name='followers')

class Interest(models.Model):
    name = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.name