from django.contrib import admin
from django.urls import path, include

from .import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('delete/<int:id>', views.delete_view, name="delete"),
    path('update/<int:id>', views.update_view, name="update"),
]