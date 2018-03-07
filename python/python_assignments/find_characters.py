list1 = ['hello','world','my','name','is','Anna']
char = 'o'

for index in range(0,len(list1)):
    for val in list1[index]:
        if val == char:
            print list1[index]
