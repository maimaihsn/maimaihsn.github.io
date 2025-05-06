from django.db import models

class Illustration(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='illustrations/')

    def __str__(self):
        return self.title
