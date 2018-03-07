from django.shortcuts import render, HttpResponse
from .models import Products

# Create your views here.
def index(request):
    Products.objects.create(name="cheese", description="Delicious curds smooshed together to create a block of holes", weight=4, price=18, cost=6, category="dairy")
    Products.objects.create(name="sausage", description="Tasty meat bits also smooshed together and cased in guts", weight=5, price=20, cost=10, category="meat")
    Products.objects.create(name="crackers", description="Baked bittles of salty goodness. Buttery, light, flaky", weight=.75, price=4, cost=1, category="baked goods")
    products = Products.objects.all()
    for product in products:
        print product.name,product.description, product.weight, product.price, product.cost, product.category, product.created_at, product.updated_at
    return render(request, "add_product/index.html")

