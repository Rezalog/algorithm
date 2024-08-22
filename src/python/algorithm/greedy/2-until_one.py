"""
2) 1이 될 때까지

입력 조건 : 첫째 줄에 N(1<=N<=100,000)과 K(2<=K<=100,000)가 공백을 기준으로 각각 자연수로 주어짐
출력 조건 : 첫째 줄에 N이 1이 될 때까지 1번 혹은 2번의 과정을 수행해야 하는 횟수의 최솟값 출력

입력 예)                출력 예)
25 5                    2
"""
# 내 풀이
n, k = list(map(int, input().split()))
count = 0


while(True):
    if(n%k==0): 
        n //= k
        count += 1
    else:
        n -= 1
        count += 1
    if(n==1): break

print(count)

"""
답안 - 1이 될 때까지
- 반복문을 돌 때마다 k로 나누므로 시간복잡도가 O(logN)
"""
n, k = map(int, input().split()) # list 로 바꿀 필요 없다
result = 0

while True:
    # N이 K로 나누어 떨어지는 수가 될 때까지 뺴기
    target = (n // k) * k 
    result += (n - target) # 1을 빼는 연산의 횟수를 한번에 더해준다(어차피 순서문제이므로)
    n = target
    # N이 K보다 작을 때(더이상 나눌 수 없을 때) 반복문 탈출
    if n < k: break
    result += 1 # 나눌때 연산 수행 횟수 1 추가
    n //= k # N이 K보다 크면 K로 나누기

# N이 K보다 작아졌을때 나머지 n값을 더해준다.(1을 어차피 빼는 연산을하니까)
result += (n-1)
print(result)