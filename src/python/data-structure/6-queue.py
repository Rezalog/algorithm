from collections import deque

# 큐는 선입선출(FIFO) 구조입니다.

queue = deque()

# 요소 추가
queue.append(2)
queue.append(3)
queue.appendleft(1)

print(queue) # deque([1, 2, 3])

# 요소 제거
print(queue.pop()) # 3
print(queue) # deque([1, 2])
print(queue.popleft()) # 1 
print(queue) # deque([2])
