from django.shortcuts import render
from rest_framework import viewsets
from .models import Products
from .serializers import ProductsSerialiser
# Create your views here.

class ProductViewset(viewsets.ModelViewSet):
    queryset = Products.objects.all()
    serializer_class = ProductsSerialiser