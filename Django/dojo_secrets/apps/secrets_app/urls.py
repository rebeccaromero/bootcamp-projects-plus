from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^register$', views.register),
    url(r'^login$', views.login_user),
    url(r'^secrets$', views.secrets),
    url(r'^logout$', views.logout),
    url(r'^blab$', views.blab),
    url(r'^popular$', views.popular),
    url(r'^like$', views.like),
    url(r'^delete$', views.delete),
]