from .models import Products
from rest_framework import serializers

class ProductsSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = '__all__'
