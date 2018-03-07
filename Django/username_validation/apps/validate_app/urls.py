from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^check_username$', views.check_username),
    url(r'^success$', views.success),
    url(r'^delete$', views.delete)
]