from django.urls import path, include
from rest_framework_mongoengine import routers
from .views import ProductListViewSet

router = routers.DefaultRouter()
router.register(r"product-list", ProductListViewSet, basename="product list api view")

urlpatterns = [
    path(r"", include(router.urls)),
]
