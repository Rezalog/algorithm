"""
상하좌우

: 가장 왼쪽 위 좌표 (1,1), 가장 오른쪽 아래는 (N,N)

입력조건
- 첫째 줄에 공간의 크기를 나타내는 N이 주어짐(1<=N<=100)
- 둘째 줄에 여행가 A가 이동할 계획서 내용이 주어짐(1<=이동횟수<=100)

출력조건
- 첫째 줄에 여행가 A가 최종적으로 도착할 지점의 좌표(X, Y)를
공백을 기준으로 구분하여 출력

입력 예시               출력 예시
5                       3 4
R R R U D D
"""

# 풀이
n = int(input())
plans = input().split()

# 움직일 방향과 값을 일치시켜 선언
move_types = ['L', 'R', 'U', 'D']
dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]
x, y = 1, 1

for plan in plans:
    for i in range(len(move_types)): # i가 숫자이므로 range 이용
        if move_types[i] == plan:
            nx = x + dx[i]
            ny = y + dy[i]
    # 이동한 위치가 MATRIX 밖일 경우 무시
    if nx < 1 or ny < 1 or nx > n or ny > n:
        continue
    # 이동
    x, y = nx, ny

print(x,y)



            