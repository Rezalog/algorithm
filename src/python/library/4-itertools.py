import itertools

# itertools는 반복자 생성을 위한 라이브러리입니다.

# 순열과 조합
data = [1,2,3]
permutations = list(itertools.permutations(data))
combinations = list(itertools.combinations(data, 2))
print(permutations) # [(1, 2, 3), (1, 3, 2), (2, 1, 3), (2, 3, 1), (3, 1, 2), (3, 2, 1)]
print(combinations) # [(1, 2), (1, 3), (2, 3)]