"""
함수의 종류

- 내장 함수 : 파이썬 기본 제공 함수
- 사용자 정의 함수 : 개발자가 직접 정의하여 사용하는 함수
"""

def add(a, b):
    return a+b

def subtract(a, b):
    return a-b

result = add(1, 2)
print("result:", result) # result: 3    

# 파라미터 직접 지정
result = subtract(b=2, a=1)
print("result: ", result) # result: -1

# global : global 키워드로 변수를 지정하면, 
# 해당 함수에서 지역변수를 만들지 않고 바깥에 선언된 변수를 바로 참조함

g = 10

def globalPrint():
    print(g)
globalPrint() # 10

def globalAdd():
    global g
    g += 1
globalAdd()
print(g) # 11

# 여러개의 반환 값 
def operator(a, b):
    av = a+b
    sv = a-b
    mv = a*b
    dv = a/b
    return av, sv, mv, dv # (패킹; 여러 반환 값을 묶음)

a, b, c, d = operator(1,2) # (언패킹; 여러 반환 값을 여러 변수에 할당)
print(a,b,c,d) # 3 -1 2 0.5


"""
# 람다 표현식(내장 함수에서 자주 사용되는 람다 함수)

lambda a : b
a: 입력 인자(매개변수)
b: 입력 인자를 사용하여 계산할 값. 즉, 계산하고 반환되는 값.

ex) sorted_list = sorted(my_list, key= lambda x : (len(x), x))

1. 첫 번째인 len(x)부터 어떻게 동작하는지 알아보자.

입력인자 x는 my_list내의 문자열 하나가 된다.
어차피 하나하나 전부 비교될 것이니, x = aaa라고 가정하자.

이를 len(x)에 넣게되면 3이라는 값이 나온다.

반환된 3이라는 값은 리스트를 정렬하는데 이용되고, 나머지 api, dempn, carrier 등 또한 3, 4, 5등의 값이 계산되며 길이순으로 정렬하게 될 것이다.

2. x는 아무런 함수 식이나 적용도 하지 않은 문자열 그 자체이므로 오름차순(사전순) 정렬을 의미한다.

=> 첫번째로 나온 len(x)를 통해 길이 순서로 정렬하되,
만약에 같은 길이가 나온다면, 두번째 비교 방법인 x를 통해서 오름차순(사전순)정렬하라는 뜻이다.
따라서 결과는 다음과 같이 길이 기준으로 정렬하되, 같은 길이의 경우에는 오름차순으로 정렬하는 결과가 나온다.

# 그래서 lamda를 왜 썼는데?
쉽게 생각하여, key에는 한개의 비교조건만 적용 가능한데, 두개의 조건을 한번에 비교해야하는 상황이니 lamda 함수를 통해서 이를 마치 하나의 비교조건인 것처럼 묶어서 사용한 것이다.


"""
array = [('홍길동', 50), ('이순신', 32), ('아무개', 74)]

def my_key(x):
    return x[1]

"""
sort() : list.sort() 로 기존 리스트를 정렬, 리스트만 가능
sorted() : sorted([1,2,3]), sorted({1:'A',2:'B'}) 등 새로운 정렬된 리스트를 만든다.(원본 보장,자료형->세리스트)
"""
print(sorted(array)) # [('아무개', 74), ('이순신', 32), ('홍길동', 50)]
print(sorted(array, key=my_key)) # [('이순신', 32), ('홍길동', 50), ('아무개', 74)], x[1] 기준 오름차순
print(sorted(array, key=lambda x:x[1])) # [('이순신', 32), ('홍길동', 50), ('아무개', 74)]

# map : 각각의 원소에 어떠한 함수를 적용
list1 = [1,2,3,4,5]
list2 = [6,7,8,9,10]
result = list(map(lambda a, b: a+b, list1, list2))
print(result) # [7, 9, 11, 13, 15]
