def digital_root(n):
    string = str(n)
    if len(string) == 1:
        return n
    while len(string) > 1:
        sum = 0
        for i in string: 
            print i
            sum += int(i)
            string = str(sum)
    return sum 

print digital_root(7)

