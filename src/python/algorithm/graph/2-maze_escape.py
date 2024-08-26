"""
미로 탈출

- 문제 설명
N x M 크기의 직사각형 미로에 갇혔다. 현 위치는 (1,1)이며 출구는 (N,M)에 존재하며
한번에 한 칸씩 이동할 수 있다.
이때 괴물이 있는 부분은 0, 괴물이 없는 부분은 1로 표시되어 있다.
탈출하기 위해 움직여야 하는 최소 칸의 개수를 구해라.(시작, 마지막 칸 포함)

"""

from collections import deque

n, m = map(int, input().split())
graph = []
for i in range(n):
    graph.append(list(map(int, input())))

# 이동할 네 가지 방향 정의(상, 하, 좌, 우)
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]
# 탐색을 수행할 때 마다 현재 노드값을 1 증가 시킨다(거리)
def bfs(x, y):
    queue = deque()
    queue.append((x,y)) # 시작 위치 queue에 초기화
    
    while queue: # queue가 빌 때까지 수행
        x, y = queue.popleft() # queue의 맨 앞 값을 x,y에 담음(현재 위치)

        # 현재 위치에서 4가지 방향으로의 위치 확인
        for i in range(4):
            nx = x + dx[i]        
            ny = y + dy[i]
            # 미로 찾기 공간을 벗어난 경우 무시
            if nx < 0 or nx >= n or ny < 0 or ny >=m:
                continue
            # 0인 노드(벽)인 경우 무시
            if graph[nx][ny] == 0: # 벽인 경우(0)
                continue
            # 해당 노드를 처음 방문하는 경우만 최단 거리 기록(현재위치값 + 1)
            if graph[nx][ny] == 1: # 처음 방문하는 경우(1)
                graph[nx][ny] = graph[x][y] + 1
                queue.append((nx,ny))
    # 가장 오른쪽 아래까지의 최단 거리 반환
    return graph[n-1][m-1]

print(bfs(0,0))

