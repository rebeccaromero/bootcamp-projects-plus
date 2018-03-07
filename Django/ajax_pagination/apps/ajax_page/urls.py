from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^filter_by_name$', views.filter_by_name),
    url(r'^change_page$', views.change_page),
]
