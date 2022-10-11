from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.

def home_view(*args, **kwargs):
    return HttpResponse ("<h1> Hello World </h1>")

def contact_view(*args, **kwargs):
    return HttpResponse ("<h1>Contact page</h1>")

def home(request):
    return render(request, 'home.html')  

def welcome_view(request):
    return render (request, 'base.html')         