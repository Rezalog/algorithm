"""
음료수 얼려 먹기

- 문제 설명
N x M 크기의 얼음 틀에서 구멍이 뚫린 부분은 0, 칸막이는 1로 표시된다.
구멍이 뚫려있는 부분 끼리 상하좌우로 붙은 것은 연결된 것으로 간주하고,
얼음 틀의 모양이 주어졌을 때 생성되는 아이스크림의 총 개수를 구하시오.

예)
다음의 4 x 5 얼음 틀이면 총 3개 아이스크림이 생성된다.

00110
00011
11111
00000

- 입력 조건 : 
첫 번째 줄에 얼음 틀의 세로 길이 N, 가로 길이 M이 주어짐(1<=N, M <=1000)
두 번째 줄부터 N+1줄까지 얼음 틀 형태 주어짐
- 출력 조건
: 한번에 만들 수 있는 아이스크림의 총 개수 출력

- 입력 예시         출력 예시
4 5                 3
00110
00011
11111
00000
"""

"""
답안
- dfs 수행 시 범위 밖인지 체크하고, 0이면 1로 바꿔주고(방문 체크)
인접한 노드에 대해 상하좌우에 해당하는 노드에 대한 dfs를 수행하여 인접 노드도 1로 만든다.
- 인접 노드 방문 처리 수행된 경우(현재 노드 미방문) True를 반환하고, 이미 방문했다면 False를 반환한다.
- 모든 노드에 대해서 dfs를 수행하는데, 방문 처리가 수행된 경우 True를 반환하므로 이 경우만 result += 1 을 한다.
"""

def dfs(x, y):
    if x<=-1 or x>=n or y<=-1 or y>=m:
        return False
    if graph[x][y] == 0: # 해당노드가 미방문이면, 방문 처리를 수행한다.
        graph[x][y] = 1
        dfs(x-1, y) # 상 
        dfs(x+1, y) # 하
        dfs(x, y-1) # 좌 
        dfs(x, y+1) # 우
        return True
    return False        

# 입력 1 : n,m 값 공백 구분
n, m = map(int, input().split())

# 입력 2 : 0, 1로 이루어진 graph
graph = []
for i in range(n):
    graph.append(list(map(int, input())))

result = 0
for i in range(n):
    for j in range(m):
        if dfs(i,j)==True: result += 1
        
        
print(result)