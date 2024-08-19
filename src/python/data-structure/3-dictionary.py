# 딕셔너리는 키-값 쌍의 집합입니다.

# declare dictionary
student = {"name": "Alice", "age": 25}

# access dictionary
print(student["name"]) # Alice

# insert/delete dictionary
student["grade"] = "A"
print(student) # {'name': 'Alice', 'age': 25, 'grade': 'A'}
del student["age"]
print(student) # {'name': 'Alice', 'grade': 'A'}