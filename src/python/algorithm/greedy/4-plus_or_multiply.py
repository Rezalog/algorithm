"""
곱하기 혹은 더하기
(Lv1, 30m, 1s, 128MB, Facebook 인터뷰 기출)


입력 조건 : 첫째 줄에 여러 개의 숫자로 구성된 하나의 문자열 S가 주어집니다.(1 < S의 길이 <= 20)
출력 조건 : 첫째 줄에 만들어질 수 있는 가장 큰 수를 출력합니다.

입력 예시 1         출력 예시 1
02984              576
입력 예시 2         출력 예시 2
567                210 
"""

# 내 풀이

n = list(map(int, list(input())))
formula = ""

def form(list, index, op):
    result = ""
    if op=="+" :
        result += f'({list[index]}+{list[index+1]})' if index<1 else f'+{list[index+1]})'
    elif op=="*":
        result += f'({list[index]}*{list[index+1]})' if index<1 else f'*{list[index+1]})'
    return result
            
# def add_parenthesis_to_left(formula_str: str):
#     return "(" + formula_str 

formula = form(n, 0, "+") if n[0] <=1 or n[1] <=1 else form(n, 0, "*")
     
for i in range(len(n)-1):
    if(i==0): continue
    if n[i]<=1: 
        formula = f'({formula}' 
        formula += form(n, i, "+")
    else:
        formula = f'({formula}' 
        formula += form(n, i, "*")
        
print(eval(formula))

"""
답안
"""
data = input()
result = int(data[0]) # 첫 번째 문자를 숫자로 변경하여 대입

for i in range(1, len(data)):
    n = int(data[i]) # 두 수 중 하나라도 '0' 혹은 '1' 인 경우 더하기 수행, 그 외 곱하기 
    print(i, data[i], n)
    if n <= 1 or result <= 1:
        result += n
    else:
        result *= n
        
print(result)