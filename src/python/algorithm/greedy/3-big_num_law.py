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

## 내 풀이
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


""" 답안 - 큰 수의 법칙
# 1,2 번째로 큰 수를 구하고 더해질때
# M이 K+1로 나누어 떨어질땐 그 몫만큼 일정한 수열이 더해진다
# 그리고 나누어 떨어지지않을때는 M을 K+1로 나눈 나머지만큼 추가적으로 더해진다.
# 이를 정리하면,
# 가장 큰 수가 더해지는 횟수 = int( M / (K+1) ) * K + M % (K+1) 이 된다
"""

n, m, k = map(int, input().split())
data = list(map(int, input().split()))
data.sort()
first = data[n-1]
second = data[n-2]

count = int(m * (k+1)) * k
count += m % (k+1)

result = (count*first) + (m-count)*second
print(result)