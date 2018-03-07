# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-07-07 19:29
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('secrets_app', '0002_auto_20170707_0546'),
    ]

    operations = [
        migrations.AddField(
            model_name='secrets',
            name='like_count',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='likes',
            name='secret',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='likes', to='secrets_app.Secrets'),
        ),
        migrations.AlterField(
            model_name='likes',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='likes', to='secrets_app.Users'),
        ),
        migrations.AlterField(
            model_name='secrets',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='secrets', to='secrets_app.Users'),
        ),
    ]
