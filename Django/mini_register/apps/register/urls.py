from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='main_page'),
    url(r'^register$', views.register, name='register_action'),
    url(r'^login$', views.login, name='login_action'),
    url(r'^success$', views.success, name='success_page'),
]