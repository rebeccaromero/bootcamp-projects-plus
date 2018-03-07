def odd_even():
    for count in range (0,2001):
        if count % 2 == 0:
            print "Number is " + str(count) + ". This is an even number.".format(count)
        else: 
            print "Number is " + str(count) + ". This is an odd number.".format(count)

def multiply(listx,num):
    for val in range(0,len(listx)):
        listx[val] *= num
    return listx
a = [2,4,10,16]
#b = multiply(a,5)
#print b

def layered_multiples(arr):
    arr_of_1s = []
    for val in range(0,len(arr)):
        arr_of_1s.append([1] * arr[val])
    print arr_of_1s
layered_multiples(multiply(a,2))

