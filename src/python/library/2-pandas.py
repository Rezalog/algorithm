import pandas as pd

# pandas: 데이터 조작 및 분석을 위한 고성능, 사용하기 쉬운 데이터 구조와 
# 데이터 분석 도구를 제공합니다.

# 데이터프레임 생성
data = {'name': ['Alice', 'Bob', 'Charlie'], 'age':[25, 30, 35]}
df = pd.DataFrame(data)
#print(df)

"""
      name  age
0    Alice   25
1      Bob   30
2  Charlie   3

"""

# 데이터프레임 접근
#print(df['name']) # 컬럼 접근

"""
0      Alice
1        Bob
2    Charlie
Name: name, dtype: object
"""

print(df.iloc[0]) # 행 접근

"""
name    Alice
age        25
Name: 0, dtype: object
"""
