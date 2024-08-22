"""
그리디 알고리즘, 탐욕법
- 항상 더 좋은 것을 선택, 최적의 해가 항상 보장되지 않음.

예)
최소한의 개수로 동전 거슬러 주기

- *** 동전의 단위가 500, 100, 50, 10 원 일때, 
항상 큰 단위가 작은단위의 '배수' 이므로 항상 최적의 해가 된다.

"""

n = 1260 # 금액
coins = [500, 100, 50, 10] # 동전의 단위
count = 0 # 거슬러준 동전의 개수

for coin in coins:
    count += n // coin # 500원짜리 개수(몫)를 담음
    n %= coin # 거슬러준 금액을 제외한 나머지를 금액에 반영함
    
print(count) # 6


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

# 답안
n, k = map(int, input().split()) # list 로 바꿀 필요 없다
result = 0

while True:
    # N이 K로 나누어 떨어지는 수가 될 때까지 뺴기
    target = (n // k) * k
    result += (n - target)
    n = target
    # N이 K보다 작을 때(더이상 나눌 수 없을 때) 반복문 탈출
    if n < k: break
    # K로 나누기
    result += 1
    n //= k

result += (n-1)
print(result)

"""
3) 큰 수의 법칙

입력 조건 : 첫째 줄에 N, M, K의 자연수가 주어지며, 각 자연수는 공백으로 구분한다
(2<=N<=1000, 1<=M<=10000, 1<=K<=10000)
둘째 줄에 N개의 자연수가 주어진다. 각 자연수는 공백으로 구분한다. 단, 각각의 자연수는 1 이상 10,000이하의 수로 주어진다
입력으로 주어지는 K는 항상 M보다 작거나 같다.

출력 조건 : 첫째 줄에 큰 수의 법칙에 따라 더해진 답을 출력한다.

입력 예)                출력 예)
5 8 3                   46
2 4 5 4 6                    
"""

# 입력 받기
n, m, k = list(map(int, input().split()))
array = list(map(int, input().split()))
array.sort()
first = array[-1]
second = array[-2]

print(first, second)

# 가장 큰 수 * K + 두번째 큰 수 1번 + 
# 큰 수의 법칙 값 = 가장 큰 수 * K + 두번째 큰 수 + 가장 큰 수 * (M-K) + ...

result = 0

while(True):
    for i in range(k): # k 번 더함
        if(m==0): break
        result += first
        m -= 1
    if(m==0): break
    result += second
    m -= 1

print(result)







