"""
집합 자료형

- 어떠한 데이터가 존재하는지 여부를 체크하는 데 많이 사용됨
- 중복 허용 X, 순서 X
- 리스트나 문자열을 이용하여 초기화할 수 있음(set() 함수 이용)
- 중괄호 안에 각 원소를 콤마 구분으로 삽입하여 초기화 가능
- 데이터 CRUD O(1) 시간 처리 가능

# 연산 - 합집합(|), 교집합(&), 차집합(-) 연산 제공
"""

# 집합 자료형 초기화 방법 1
data = set([1,2,3,3,4,4,5])
print(data) # {1, 2, 3, 4, 5}

# 집합 자료형 초기화 방법 2
data = {1,2,3,3,4,4,5}
print(data) # {1, 2, 3, 4, 5}

# 집합 연산
print({1,2,3,3,4,5} | {3,6,7}) # {1, 2, 3, 4, 5, 6, 7}
print(set([1,3,5,6,8]) & {1,6,10}) # {1, 6}
print({1,2,3,4,5} - {2,3}) # {1, 4, 5}

# 집합 선언
fruits = {"apple", "banana", "cherry"}

# 집합 연산
fruits.add("orange")
print(fruits) # {'banana', 'orange', 'apple', 'cherry'}
fruits.update(["melon","orange", "garbage"]) # {'apple', 'melon', 'garbage', 'orange', 'cherry'}
fruits.remove("banana")
print(fruits) # {'cherry', 'apple', 'orange'}