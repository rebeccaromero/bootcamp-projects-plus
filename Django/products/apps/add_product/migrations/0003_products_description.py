# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-07-05 19:23
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('add_product', '0002_auto_20170705_1911'),
    ]

    operations = [
        migrations.AddField(
            model_name='products',
            name='description',
            field=models.TextField(default=0, verbose_name=1255),
            preserve_default=False,
        ),
    ]
