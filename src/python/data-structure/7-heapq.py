import heapq

# 우선순위 큐 (힙)
# : 우선순위 큐는 요소가 우선순위에 따라 정렬되는 구조입니다.
"""
heapq.heappush(heap, item) : item을 heap에 추가
heapq.heappop(heap) : heap에서 가장 작은 원소를 pop & 리턴. 비어 있는 경우 IndexError가 호출됨. 
heapq.heapify(x) : 리스트 x를 즉각적으로 heap으로 변환함 (in linear time, O(N) )

"""


# 힙 선언 및 초기화
heap = []

# 요소 추가
heapq.heappush(heap, 3)
heapq.heappush(heap, 1)
heapq.heappush(heap, 2)
print(heapq.heappop(heap)) # 1
print(heapq.heappop(heap)) # 2

heap2 = [1,2,3,4,5]
heapq.heapify(heap2)
print(heap2)