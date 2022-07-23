from .serializers import StudentSerializer
from rest_framework.generics import ListCreateAPIView
from .models import Student


class StudentList(ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
