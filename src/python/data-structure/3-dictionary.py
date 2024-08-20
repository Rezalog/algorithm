"""
사전 자료형

사전(딕셔너리)는 키-값 쌍을 데이터로 가지는 자료형
(리스트, 튜플은 순차적으로 값을 저장함)

- 원하는 변경 불가능한(Immutable) 자료형을 키로 사용할 수 있음
- 사전 자료형은 해시테이블(HashTable)을 이용하므로 데이터 CRUD 시 O(1) 시간 처리 가능

# keys()
- 키 데이터만 뽑아서 리스트로 이용

# values()
- 값 데이터만 뽑아서 리스트로 이용

"""
# declare dictionary
student = dict()
print(student) # {}
student = {"name": "Alice", "age": 25, "isMale" : False}

# access dictionary
print(student["name"]) # Alice

# insert/delete dictionary
student["grade"] = "A"
print(student) # {'name': 'Alice', 'age': 25, 'grade': 'A'}
del student["age"]
print(student) # {'name': 'Alice', 'grade': 'A'}

# keys, values
key_list = student.keys()
print(key_list) # dict_keys(['name', 'isMale', 'grade']), 사전자료형 객체
print(list(key_list)) # ['name', 'isMale', 'grade']
value_list = student.values()
print(value_list) # dict_values(['Alice', False, 'A'])

# 각 키에 따른 값을 하나씩 출력
for key in key_list:
    print(student[key])
"""
Alice
False
A
"""