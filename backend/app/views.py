from django.shortcuts import render

from django.http import JsonResponse


def index(request):
    return JsonResponse({'response':"Welcome to Vidstream api"})
