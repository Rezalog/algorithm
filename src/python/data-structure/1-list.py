numbers = [1, 2, 3, 4, 5]

# 리스트는 순서가 있는 변경 가능한 데이터 집합입니다.


# list indexing and slicing
print(numbers[0]) # index 0 element, 1
print(numbers[-1]) # index last element, 5
print(numbers[1:3]) # slicing index element 1 to 2(3-1), [2,3]

# list method
numbers.append(6)
print(numbers) # append element to last index, [1, 2, 3, 4, 5, 6]
numbers.remove(3)
print(numbers) # remove element of same element string name parameter, [1, 2, 4, 5, 6]
# numbers.remove(0) # error
