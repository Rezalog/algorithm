"""
내장 함수
"""

# sum()
result = sum([1,2,3,4,5])
print(result) # 15

# min(), max()
min_result = min(7,3,5,2)
max_result = max(7,3,5,2)
print(min_result, max_result) # 2, 7 

# eval() : 사람의 입장에서 수식으로 표현된 식을 실제 수로 반환
result = eval("(3+5)*7")
print(result) # 56

# sorted()
result = sorted([9,1,8,5,4]) # 오름차순
reverse_result = sorted([9,1,8,5,4], reverse=True) # 내림차순
print(result, reverse_result) # [1, 4, 5, 8, 9] [9, 8, 5, 4, 1]

# sorted() with key
array = ('홍길동', 35),('이순신', 75),('아무개', 50)
result = sorted(array, key=lambda x:x[1], reverse=True) # array의 인덱스 1 원소 기준으로 내림차순
print(result) # [('이순신', 75), ('아무개', 50), ('홍길동', 35)]

"""
itertools - 순열과 조합

- 순열은 순서 고려, 조합은 순서 고려 x
- 순열(permutation) : nPr = n * (n-1) * ... * (n-r+1)
- 조합(combination) : nCr = nPr / r!
"""

from itertools import permutations, combinations, product, combinations_with_replacement

# 순열, 조합(permutations, combinations)
data = ['A', 'B', 'C']
p = list(permutations(data, 3))
c = list(combinations(data, 2))
print(p, c)
# [('A', 'B', 'C'), ('A', 'C', 'B'), ('B', 'A', 'C'), ('B', 'C', 'A'), ('C', 'A', 'B'), ('C', 'B', 'A')] 
# [('A', 'B'), ('A', 'C'), ('B', 'C')]

# 중복 순열, 중복 조합(product, combinations_with_replacement)
pp = list(product(data, repeat=2)) # 2개를 뽑는 모든 순열 구하기(중복 허용)
print(pp) # [('A', 'A'), ('A', 'B'), ('A', 'C'), ('B', 'A'), ('B', 'B'), ('B', 'C'), ('C', 'A'), ('C', 'B'), ('C', 'C')]
cc = list(combinations_with_replacement(data, 2))
print(cc) # [('A', 'A'), ('A', 'B'), ('A', 'C'), ('B', 'B'), ('B', 'C'), ('C', 'C')]

"""
collections - Counter

- 등장 횟수를 세는 기능
- 리스트 같이 반복 가능한(iterable) 객체가 주어졌을 때, 내부 원소가 몇번 등장했는지 알려줌
"""

from collections import Counter

c = Counter(['red', 'blue', 'blue', 'car', 'mom', 'mom'])

print(c) # Counter({'blue': 2, 'mom': 2, 'red': 1, 'car': 1})
print(c['blue']) # 2
print(dict(c)) # {'red': 1, 'blue': 2, 'car': 1, 'mom': 2}

"""
math - 최대공약수(gdc), 최소공배수(lcm)

- 이외에도 팩토리얼, 제곱근, 원주율 등을 포함
"""

import math

def lcm(a,b):
    return a*b // math.gcd(a,b)

a=21
b=14
print(math.gcd(a,b)) # 7
print(lcm(a,b)) # 42




