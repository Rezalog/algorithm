"""
알파벳 재정렬

- 문제 설명
알파벳 대문자와 숫자(0~9)로만 구성된 문자열이 입력으로 주어진다.
이 때 모든 알파벳을 오름차순으로 정렬하여 이어서 출력한 뒤,
그 뒤 모든 숫자를 더한 값을 이어 출력한다.
eX) K1KA5CB7 이면 ABCKK13

- 입력 조건
첫째 줄에 하나의 문자열 S가 주어짐

- 출력 조건
첫째 줄에 문제에서 요구하는 정답 출력

- 입력 예시 1       출력 예시 1
K1KA5CB7            ABCKK13

- 입력 예시 2       출력 예시 2
AJKDLSI412K4JSJ9D   ADDIJJJKKLSS20

"""

# 내 풀이
"""
정답 !
"""
data = list(input())
data.sort()

num = 0
result = "".join(data)

for literal in data:
    if ord(literal) >= 48 and ord(literal) <= 57: 
        result = result.replace(literal, "")
        num += int(literal)
    
result += str(num)
print(result)