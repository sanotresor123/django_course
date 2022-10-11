from django.shortcuts import render,redirect
from .models import Port

# Create your views here.

def index_view(request):
    return render (request, 'index.html')

    my_content = {
       "my_text": "This is my design",
       "my number" : 1234,
       "my_list" : [123,12345, "ABC"]

      

    } 

def signup_view (request):
   selectinfo = Port.objects.all()
   context = {
      'info':selectinfo
      }
   if request.method == 'POST':
      title = request.POST['title']
      description = request.POST['description']
      summary = request.POST['summary']
      insertinfo = Port(title=title,description=description,summary=summary)
      insertinfo.save()
   return render (request, 'signup.html',context )   

def delete_v(request,id):
    selectone = Port.objects.get(id=id)
    selectone.delete()
    return redirect('signup')
