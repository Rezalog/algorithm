"""
입출력

input() : 한 줄의 문자열을 입력 받는 함수
input().split() : 공백을 기준으로 입력받은 데이터를 리스트로 반환함
map() : 리스트의 모든 원소에 각각 특정한 함수를 적용함

"""

# 문제 1. 학생의 성적 데이터가 주어지고, 이를 내림차순으로 구현하시오.
"""
입력                            출력
5                               99  90  75  65  34
65 90 75 34 99
"""

# n = input()
# list = list(map(int, input().split()))
# list.sort(reverse=True)
# print(list) # [99, 90, 75, 65, 34]

# 패킹, 언패킹
# n2 = input()
# a, b, c = list(map(int, input().split())) # 패킹(우), 언패킹(좌)
# print(a, b, c)

""" 
빠르게 입력 받기(sys 라이브러리 사용)

- sys.stdin.readline() 메서드 사용
- 입력 후 엔터(Enter)가 줄 바꿈 기호로 입력되므로 rstrip() 메서드와 함께 사용
"""

import sys

data = sys.stdin.readline().rstrip()
print(data)


"""
자주 사용되는 표준 출력 방법

- print()
: 각 변수를 콤마를 이용하여 띄어쓰기로 구분하여 출력 가능
: 출력 이후에 줄바꿈을 수행, end 속성을 이용하면 출력 이후 줄바꿈 안할 수 있음

"""

print(1, 2)
print(3, end=" + ")
print(4, end=" = ")
answer = 7
print(" 정답은 " + str(answer) + "입니다.") 

"""
출력 
1 2
3 4 정답은 7 입니다.
"""

"""
f-string

- Python 3.6 부터 사용 가능
- 문자열 앞에 f 접두사를 붙여 사용
- 중괄호 안에 변수명을 기입하여 간단히 문자열과 정수를 함께 넣을 수 있음
"""

f = '칠'
f2 = 7
print(f"정답은 {f}입니다.") # 정답은 칠입니다.
print(f"정답은 {f2}입니다.") # 정답은 7입니다.

