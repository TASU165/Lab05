from django.http.response import HttpResponse
from django.shortcuts import render

# Create your views here.
def products(request):
    return render(request, 'app_products/products.html')

def product(request, product_id):
    return render(request, 'app_products/product.html',context={'product_id':product_id})