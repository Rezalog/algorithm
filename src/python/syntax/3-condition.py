x = 10
if x > 5:
    print("x is greater than 5")
elif x == 5:
    print("x is 5")
else:
    print("x is less than 5")
    
y = 5

if y > 5:
    print("y is greater than 5")
elif y == 5:
    print("y is 5")
else:
    print("y is less than 5")
    
    
"""
조건문

# 기타 연산자(in, not in)
- 리스트, 튜플, 문자열, 딕셔너리 모두에서 사용
- x in 리스트 : 리스트 안에 x가 들어가 있을때 True
- x not in 문자열 : 문자열 안에 x가 없을때 True

# pass 키워드
- 아무것도 처리하고 싶지 않을 때 사용
ex) 디버깅 과정에서 일단 조건문의 형태만 만들어 놓고 조건문을 처리하는 부분은 비우고싶은 경우

# 조건문 간소화
- 조건문에서 실행된 소스코드가 한 줄 이면 붙여쓸 수 있다.

# 조건부 표현식(Conditional Expression)
- 파이썬의 삼항연산자, 조건이 참인 경우 값 if 조건 else 조건이 거짓인 경우 값

# 조건문 내 부등식
- x > 0 and x < 20 말고 0 < x < 20 사용 가능

"""

# in, not in
list1 = [1,2,3,4,5, "A", "B"]
x = "C"
print(x not in list1) # True

# pass

score = 85

if score >= 80:
    pass # 나중에 작성할 코드, 안적으면 오류
else:
    print('성적이 80점 미만입니다.')

print('프로그램 종료') # 이것만 출력됨


# 조건문의 간소화
if score>=80: result="Success" 
else: result="Fail"
print(result)

# 조건문의 간소화 - 조건부 표현식(Conditional Expression)
result = "Success" if score>=80 else "Fail"
print(result)