# 집합은 순서가 없고 중복을 허용하지 않는 데이터 집합입니다.


# 집합 선언
fruits = {"apple", "banana", "cherry"}

# 집합 연산
fruits.add("orange")
print(fruits) # {'banana', 'orange', 'apple', 'cherry'}
fruits.remove("banana")
print(fruits) # {'cherry', 'apple', 'orange'}