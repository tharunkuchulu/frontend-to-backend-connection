from django.urls import path
from . import views

urlpatterns = [
    path('app/greet/', views.display, name='display'),
]