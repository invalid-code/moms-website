from rest_framework_mongoengine import serializers
from .models import ProductList


class ProductListSerializer(serializers.DocumentSerializer):
    class Meta:
        model = ProductList
        fields = "__all__"
