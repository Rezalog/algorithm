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