# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-07-05 19:34
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('add_product', '0003_products_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='products',
            name='cost',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='products',
            name='price',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='products',
            name='weight',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]
