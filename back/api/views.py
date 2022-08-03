from rest_framework_mongoengine import viewsets

# from rest_framework.status import *
from rest_framework.response import Response
from rest_framework.parsers import JSONParser

from .models import ProductList
from .serializers import ProductListSerializer


# Create your views here.
class ProductListViewSet(viewsets.ModelViewSet):
    queryset = ProductList.objects
    serializer_class = ProductListSerializer
