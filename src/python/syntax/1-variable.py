x = 5
y = 0.3 + 0.6
z = -.67
w = 5.


# 1,000,000,000 미만의 지수표현 방식(실수)
e = 1e9 # 1 * 10의 9제곱(10억) 100000000.0
e1 = int(1e9) # 100000000
e2 = 75.25e1 # 752.5
e3 = 3954e-3 # 3.954

name = "Alice"
is_student = True

# 실수 연산(오차 범위에 따른 round 함수 활용) - 2진수에서 0.9를 정확히 표현할 방법이 없음.
if y == 0.9:
    print(True)
else:
    print(False) #
    
# 해결
if round(y, 4) == 0.9: # 5째자리에서 반올림하여 4째자리까지 출력한다.
    print(True) # 
else:
    print(False)    
    

# 자료형 출력
print(type(x)) 
print(type(round(y,4))) 
print(type(z)) 
print(type(w)) 
print(type(e)) 
print(type(name)) 
print(type(is_student))
print(x) 
print(round(y,4)) 
print(z) 
print(w) 
print(e) 
print(e1) 
print(e2) 
print(e3) 
print(name) 
print(is_student)
"""
False
True
<class 'int'>
<class 'float'>
<class 'float'>
<class 'float'>
<class 'float'>
<class 'str'>
<class 'bool'>
5
0.9
-0.67
5.0
1000000000.0
1000000000
752.5
3.954
Alice
True
"""