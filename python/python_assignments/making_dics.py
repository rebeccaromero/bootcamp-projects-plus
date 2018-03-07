name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"]
favorite_animal = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas"]

def zip_it(x,y):
    if len(x) >= len(y):
        zipped_dic = zip(x,y)
    else: 
        zipped_dic = zip(y,x)
    print zipped_dic

zip_it(name,favorite_animal)