def insertionSort(arr):
    for i in range(1, len(arr)):
        for j in range(i-1, -1, -1):
            print arr[i]
            print arr[j]
            if arr[i] < arr[j]:
                arr[i], arr[j] = arr[j], arr[i]
                i -= 1
                print arr
    return arr


x = [6, 5, 3, 1, 8, 7, 2, 4]
print insertionSort(x)