# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-07-19 02:02
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('store_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='users',
            name='address',
            field=models.OneToOneField(default=1, on_delete=django.db.models.deletion.CASCADE, to='store_app.Addresses'),
            preserve_default=False,
        ),
    ]
