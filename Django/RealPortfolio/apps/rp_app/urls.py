from django.conf.urls import url
from . import views           # This line is new!
urlpatterns = [
    url(r'^$', views.index),
    url(r'^projects$', views.projects),
    url(r'^about$', views.about),
    url(r'^tests$', views.tests)
]
