# 리스트는 순서가 있는 변경 가능한 데이터 집합입니다.
numbers = [1, 2, 3, 4, 5]


# 크기가 N이고, 모든 값이 0인 1차원 리스트 초기화
n = 10
arr = [0] * n
print(arr) # [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

"""
list indexing(특정 원소에 접근)
"""
print(numbers[0]) # index 0 element, 1
print(numbers[-1]) # index last element, 5
print(numbers[-3]) # index started last index number, and 3rd, 3

"""
list slicing(연속적인 위치를 갖는 원소를 가져옴) - 끝 인덱스는 실제 인덱스보다 1보다 크게 설정
"""
print(numbers[1:3]) # slicing index element 1 to 2(3-1), [2,3]

"""
리스트 컴프리헨션 - 리스트를 초기화하는 방법 중 하나로, 대괄호 안에 조건문과 반복문을 적용하여 리스트를 초기화
"""
# 3의 배수
listComprehension = [i*3 for i in range(10)] # i 라는 변수가 range(10), 즉 0~9까지 반복하면서 증가될때의 i*2를 원소로하는 배열을 선언 및 초기화
print(listComprehension) # [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

# 0부터 19까지의 수 중에서 홀수만 포함
listComprehensionOnlyOdd = [i for i in range(20) if i%2==1]
print(listComprehensionOnlyOdd) # [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

# 1부터 9까지의 수 중의 짝수 값들의 제곱 값을 포함하는 리스트
listComprehensionSquared = [i*i for i in range(1, 10) if i%2==0]
print(listComprehensionSquared) # [4, 16, 36, 64]

"""
2차원 - N * M 크기의 2차원 리스트 초기화(예시) - 증가시킬 변수가 굳이없어도 되면 _
"""
listCompN = 4
listCompM = 3
listCompArr = [[0]*listCompM for _ in range(listCompN)]
listCompArr[1][1] = 5
print(listCompArr) # [[0, 0, 0], [0, 5, 0], [0, 0, 0], [0, 0, 0]] - 가로가 M(3) 세로가 N(4)

# 잘못된 예시
wrongListCompArr = [[0]*listCompM]*listCompN
wrongListCompArr[1][1] = 5
print(wrongListCompArr) # [[0, 5, 0], [0, 5, 0], [0, 5, 0], [0, 5, 0]] - 같은 객체로 인식되어 잘못됨

"""
리스트 관련 기타 메서드

    함수명         사용법                      설명                 시간복잡도
------------------------------------------------------------------------------    
- append()     arr.append(a)            arr에 오른쪽부터 a 삽입      O(1)
- sort()       arr.sort()               기본 정렬, 오름차순(퀵)      O(NlogN)
               arr.sort(reverse=True)   내림차순 정렬               O(NlogN)
- reverse()    arr.reverse()            list의 원소 순서 다 뒤집음   O(N)
- insert()     arr.insert(index, a)     arr의 index에 a 삽입        O(N)
- count()      arr.count(e)             e값을 가지는 arr의 원소 개수 O(N)
- remove()     arr.remove(e)            e값을 가지는 원소 1개 제거   O(N)                                                    

""" 
numbers.append(6)
print(numbers) # append element to last index, [1, 2, 3, 4, 5, 6]
numbers.remove(3)
print(numbers) # remove element of same element string name parameter, [1, 2, 4, 5, 6]
# numbers.remove(0) # error

# 리스트에서 특정 값을 가지는 원소를 모두 제거하기
removeAllArr = [1,2,3,4,5,5,5]
remove_set = {3,5} # 집합 자료형, 특정 원소의 존재 유무 만을 체크하고자 사용

_result = [i for i in removeAllArr ]
print(_result) # [1, 2, 3, 4, 5, 5, 5]
result = [i for i in removeAllArr if i not in remove_set] 
#-- 해석 : removeAllArr 원소 중(i) remove_set에 포함되지 않은 원소들만 result에 배열로 초기화하겠다.
print(result) # [1, 2, 4]
