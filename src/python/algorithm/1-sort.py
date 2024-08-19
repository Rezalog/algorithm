# 정렬 알고리즘

arr = [10,5,1,9,3,7] 

# 버블 정렬
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

# print(bubble_sort(arr)) # [1, 3, 5, 7, 9, 10]


# 퀵 정렬
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2] # 9 
    left = [x for x in arr if x < pivot] # [5, 1, 3, 7]
    middle = [x for x in arr if x == pivot] # [9]
    right = [x for x in arr if x > pivot] # [10]
     
    return quick_sort(left) + middle + quick_sort(right)

print(quick_sort(arr))
# print("arr:" )
# print(arr)
# test = [a for a in arr if a < 7]
# print(test) # [1,3,5]