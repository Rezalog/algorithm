"""
왕실의 나이트
(Lv 1, 20m, 1s, 128MB)

- 문제 설명
: 체스판은 8x8, 나이트는 L자로만 이동, 밖으로 못나감
1. 수평으로 두 칸 이동한 뒤 수직으로 한 칸 이동
2. 수직으로 두 칸 이동한 뒤 수평으로 한 칸 이동

이처럼 8x8 좌표 평면상에서 나이트가 위치가 주어졌을 때 
나이트가 이동할 수 있는 경우의 수를 출력해라.
(행 위치는 1~8, 열 위치는 a~h로 표현)
ex) c2에 있을 때 이동할 수 있는 경우의수 : 6가지

- 입력      출력
a1          2
"""

# 내 풀이
"""
정답 !
"""

# 이동 가능 경우의 수 최대 값 : 8
inputt = input()
count = 0

x, y = ord(inputt[0])-96, int(inputt[1]) 
dx = [2, 2, 1, 1, -2, -2, -1, -1]
dy = [1, -1, 2, -2, 1, -1, 2, -2]

for i in range(8):
    nx =  x + dx[i]
    ny =  y + dy[i]
    
    if nx < 1 or nx > 8 or ny < 1 or ny > 8: continue
    count += 1
    
print(count)

"""
답안

[회고]
- 아스키코드를 직접 구해서 빼지말고, 알파벳 소문자 계열이면 해당 값에서 a를 빼고 1을 더하면 된다. 
- 변수명 설정 시 행(세로, row), 열(가로, column), 방향(step) 임을 고려하자
- 방향을 튜플로 설정하여 가독성 및 처리 효율성을 높이자
"""

# 현재 나이트 위치 입력 받기
input_data = input() # a1
row = int(input_data[1]) # a1 중 1
column = int(ord(input_data[0])) - int(ord('a')) + 1 # a1 중 a, 숫자 형태로 만들자(97-97+1=1)

# 나이트가 이동할 수 있는 8가지 방향 정의
steps = [(-2, -1), (-1, -2), (1,-2), (2,-1), (2, 1), (-1, 2), (-2, 1), (1, 2)]

# 8가지 방향에 대하여 이동 가능한지 확인
result = 0
for step in steps:
    next_row = row + step[0]
    next_column = column + step[1]
    if next_row >= 1 and next_row <= 8 and next_column >= 1 and next_column <= 8:
        result += 1
print(result)
