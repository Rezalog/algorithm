"""
BFS(Breadth-First Search)

1. collections 의 deque 라이브러리 사용
2. 처음 노드로 queue 를 선언하고, 방문했다고 처리 후(visited[start]=True) 
3. while 문으로 queue 가 빌떄까지 돌며 처음 노드를 queue에서 빼고 해당 노드를 출력함(방문한 노드)
4. graph에 있는 대상 노드와 인접한 노드를 queue에 모두 넣고, 방문 처리함
5. 이 과정 반복, 모두 방문 처리가 되면 queue가 비어있게 되며 종료
"""

from collections import deque

def bfs(graph, start, visited): # 그래프, 시작노드, 방문여부
    # 큐(Queue) 구현을 위해 deque 라이브러리 사용
    queue = deque([start])
    # 현재 노드 방문 처리
    visited[start] = True
    # 큐가 빌 때까지 반복
    while queue:
        # 큐에서 맨 앞 원소를 뽑아 출력
        v = queue.popleft()
        print(v, end=' ')
        # 아직 방문하지 않은 인접 원소들을 큐에 삽압, 방문 처리
        for i in graph[v]:
            if not visited[i]:
                queue.append(i)
                visited[i] = True

graph = [
    [], # 0번 인덱스는 비워둔다.
    [2,3,8], # 1번 노드는 2,3,8 노드와 인접함
    [1,7], # 2번 노드는 1,7 노드와 인접함
    [1,4,5], # 3번 노드는 1,4,5 노드와 인접함
    [3,5], # 4번 노드는 3,5 노드와 인접함
    [3,4], # 5번 - 3,4
    [7], # 6번 - 7
    [2,6,8], # 7번 - 2,6,8
    [1,7] # 8번 - 1,7
]

visited = [False] * 9

bfs(graph, 1, visited)