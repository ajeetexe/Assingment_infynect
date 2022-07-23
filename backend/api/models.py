from django.db import models
from django.utils.translation import gettext_lazy as _
from django.core.validators import RegexValidator
# Create your models here.


class Student(models.Model):
    name = models.CharField(max_length=256)
    department = models.CharField(max_length=256)
    email = models.EmailField()
    mobile = models.CharField(max_length=12,validators=[RegexValidator(regex='(0|91)?[7-9][0-9]{9}$',message=_("Incorrect mobile number."),),])
    address = models.TextField(max_length=1000)


    def __str__(self):
        return self.name