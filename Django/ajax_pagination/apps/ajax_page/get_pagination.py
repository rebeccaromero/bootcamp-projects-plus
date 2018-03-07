from __future__ import division
from .models import Leads
import math

def get_page_count(filter, divisor):
    leads = (Leads.objects.filter(first_name__startswith = filter) | Leads.objects.filter(last_name__startswith = filter))
    count = leads.count()
    page_count = int(math.ceil(count/divisor))
    return page_count

def check_left_arrow(curr_page):
    if curr_page > 1:
        return True
    else:
        return False

def check_right_arrow(curr_page, filter, divisor):
    page_count = get_page_count(filter, divisor)
    if curr_page < page_count:
        return True
    else:
        return False

def get_pages(filter, divisor):
    page_count = get_page_count(filter, divisor)
    pages = []
    for i in range(0, page_count):
        pages.append(i + 1)
    print pages
    return pages

def get_leads(filter, divisor, curr_page):
    beginning = divisor * (curr_page - 1) - 1
    if beginning < 0:
        beginning = 0
    end = divisor * curr_page
    leads = (Leads.objects.filter(first_name__startswith = filter) | Leads.objects.filter(last_name__startswith = filter))[beginning:end]
    return leads

def get_pagination(filter, divisor, curr_page):
    context = {
        'left_arrow' : check_left_arrow(curr_page),
        'right_arrow' : check_right_arrow(curr_page, filter, divisor),
        'pages' : get_pages(filter, divisor),
        'leads' : get_leads(filter, divisor, curr_page)
    }
    return context

# leads = Leads.objects.filter(first_name__startswith = filter) | Leads.objects.filter(last_name__startswith = filter)
#     count = leads.count()
#     page_count = int(math.ceil(count/divisor))
#     print 'Here comes speed racer'
#     print 'divisor: ' + str(divisor)
#     print 'count: ' + str(count)
#     print 'page count: ' + str(page_count)
#     pages = []
#     tables
#     context = {}
#     for i in range(0, page_count):
#         key = 'table' + str(i+1)
#         beginning = i * 8 - 1
#         if beginning < 0:
#             beginning = 0
#         end = (i + 1) * 8
#         value = leads[beginning:end]
#         context[key] = value
#         pages.append(i + 1)
#     #print context
#     context['pages'] = pages