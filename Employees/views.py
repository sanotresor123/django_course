from django.shortcuts import render,redirect
from django.http import HttpResponse
# import africastalking
from .models import Employee

# from django.views.decorates.csrf import csrf_exempt

# username = nilacsa60@gmail.com
# api_key = "
# d26d2fac6414955e67d1d54ff8ee9849a73ce16b322d689adee44e686e327bf9"
# africastalking.initialize(username, api_key)


# Create your views here.

def save(request):
    selectdata = Employee.objects.all()
    if request.method == 'POST':
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        sex = request.POST ['sex']
        email = request.POST['email']
        password = request.POST['password']
        insertdata = Employee(first_name=first_name,last_name=last_name,sex=sex,email=email,password=password)
        try:
            insertdata.save()
        except:
            return render (request, 'logout.html')    
    return render(request,'logout.html',{'data':selectdata})


def delete_view (request,id):
    select = Employee.objects.get(id=id)
    select.delete()
    return redirect('save')


def update_view(request,id):
    
    updatedata = Employee.objects.get(id=id)
    if request == 'POST':
        updatedata.first_name=request.POST['first_name']
        updatedata.last_name=request.POST['last_name']
        updatedata.sex=request.POST['sex']
        updatedata.email=request.POST['email']
        updatedata.password=request.POST['password']

        updatedata.save()
        try:
          return render(request, 'update.html', {'data1':updatedata})
          return redirect('save')
        
        except:
            return render(request, 'logout.html')
            

             

     
   
   