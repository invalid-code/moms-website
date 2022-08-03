from mongoengine import (
    Document,
    ListField,
)


# Create your models here.
class ProductList(Document):
    product_table = ListField()
