def square_digits(num):
    string = str(num)
    squared = []
    for i in string:
        squared.append(str(int(i)**2))
    num = int(''.join(squared))
    return num

print square_digits(217)