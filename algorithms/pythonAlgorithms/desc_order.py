def Descending_Order(num):
    numList = []
    for i in str(num):
        numList.append(int(i))
    for i in range(len(numList)):
        highest = i
        for j in range(i+1, len(numList)):
            if numList[j] > numList[highest]:
                highest = j
        numList[i], numList[highest] = numList[highest], numList[i]
    return int(''.join(map(str, numList)))
    