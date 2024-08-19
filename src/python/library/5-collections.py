import collections

# collections은 특수한 데이터 구조를 제공하는 라이브러리입니다.

# 카운터
counter = collections.Counter([1,2,2,3,3,3,3])
print(counter) # Counter({3: 3, 2: 2, 1: 1})
print(counter.get(3)) # 4

# 디폴트딕트
default_dict = collections.defaultdict(int)
default_dict['a'] += 1
print(default_dict) # defaultdict(<class 'int'>, {'a': 1})
default_dict2 = collections.defaultdict(str)
default_dict2['name'] = "mom"
print(default_dict2)
