"""
최대 공약수 계산(유클리드 호제법)

"두 자연수 A, B에 대해(A>B) A를 B로 나눈 나머지를 R 이라고 하면
이때 A와 B의 최대공약수는 B와 R의 최대공약수와 같다."

GCD(A,B) = GCD(B,R)

ex)

단계        A       B      A%B(R)     GCD
1         192      162     30          6
2         162      30      12          6 
3          30      12       6          6
4          12       6       0          6

"""

def gcd(a,b):
    if a % b == 0:
        return b
    return gcd(b, a%b)



print(gcd(192, 162))
print(gcd(162, 30))
print(gcd(30, 12))
print(gcd(12, 6))