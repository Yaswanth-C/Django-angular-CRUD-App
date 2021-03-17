from django.db import models

# Create your models here.

class Products(models.Model):
    category_choices = (('mobiles','Mobiles'),('smartphones','Smart Phones'),('accessories','Accessories'),)
    name = models.CharField(max_length=100)
    price = models.PositiveIntegerField()
    category = models.CharField(max_length=50,choices=category_choices)
    date_first_available = models.DateTimeField(auto_now_add=True)
