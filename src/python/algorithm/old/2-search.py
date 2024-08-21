# 탐색 알고리즘

# 이진 탐색

def binary_search(arr, target):
    left, right = 0, len(arr)-1
    while left <= right:
        mid = (left+right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] > target:
            left = mid+1
        else:
            right = mid-1
    return -1
