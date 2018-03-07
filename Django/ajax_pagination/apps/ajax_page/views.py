from django.shortcuts import render, HttpResponse
from .models import Leads
from get_pagination import get_pagination

def index(request):
    print 'BUTTER'
    context = get_pagination("", 8, 1)
    print context['pages']
    return render(request, 'ajax_page/index.html', context)

def change_page(request):
    filter = str(request.POST['filter'])
    curr_page = int(request.POST['curr_page'])
    context = get_pagination(filter, 8, curr_page)
    return render(request, 'ajax_page/table.html', context)

def filter_by_name(request):
    # if 'filter' in request.POST:
    #     filter = str(request.POST['filter'])
    #     print 'Filter: ' + filter
    #     butter, page_count = get_pagination(filter, 8)
    #     leads = Leads.objects.filter(first_name__startswith = filter) | Leads.objects.filter(last_name__startswith = filter)
    #     #print 'Filter Count: ' + str(Leads.objects.filter(first_name__startswith = filter).count())
    #     # for lead in leads:
    #     #     print 'Lead Name: ' + lead.first_name
    #     table1 = leads[:8]
    #     print page_count
    #     table2 = leads[8:16]
    #     table3 = leads[15:24]
    #     table4 = leads[23:32]
    #     context = {
    #         'table1' : table1,
    #         'table2' : table2,
    #         'table3' : table3,
    #         'table4' : table4
    #     }
    # else:
    #     print 'BUTTER'
    #     leads = Leads.objects.filter(first_name__startswith = "") | Leads.objects.filter(last_name__startswith = "")
    #     table1 = leads[:8]
    #     table2 = leads[8:16]
    #     table3 = leads[15:24]
    #     table4 = leads[23:32]
    #     context = {
    #         'table1' : table1,
    #         'table2' : table2,
    #         'table3' : table3,
    #         'table4' : table4
    #     }
    return render(request, 'ajax_page/table.html', context)


    
    
    
    # Leads.objects.create(first_name='Gigi', last_name='Cat', email='pink_nosed@adorable.meow')
    # Leads.objects.create(first_name='Jasmine', last_name='Something', email='tigers_rule@princess.com')
    # Leads.objects.create(first_name='Mom', last_name='Neutron', email='jimmysMOM@mom.com')
    # Leads.objects.create(first_name='Sly', last_name='Cooper', email='kingOfthieves@cool.gov')
    # Leads.objects.create(first_name='Sister', last_name='Andrews', email='sister1@andrews.sing')
    # Leads.objects.create(first_name='Sister2', last_name='Andrews', email='sister2@andrews.sing')
    # Leads.objects.create(first_name='Sister3', last_name='Andrews', email='sister3@andrews.sing')
    # Leads.objects.create(first_name='Luna', last_name='Lizard', email='belly_crawler@creepers.com')
    # Leads.objects.create(first_name='Dino', last_name='Romero', email='daniel_san28@coders.net')
    # Leads.objects.create(first_name='Aiden', last_name='Whocares', email='TallGuy9000@catlovers.net')
    
    
    
    
    
    
    
    
    
    
    