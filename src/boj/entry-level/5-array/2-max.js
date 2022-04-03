/*
1. 단계별로 풀어보기 - 1차원 배열 - 2562 - 최댓값

문제)
9개의 서로 다른 자연수가 주어질 때, 
이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램을 작성하시오.

예를 들어, 서로 다른 9개의 자연수
3, 29, 38, 12, 57, 74, 40, 85, 61
이 주어지면, 이들 중 최댓값은 85이고, 이 값은 8번째 수이다.
-------------------------------------------------------------------------
입력)
첫째 줄부터 아홉 번째 줄까지 한 줄에 하나의 자연수가 주어진다. 
주어지는 자연수는 100 보다 작다.

출력)
첫째 줄에 최댓값을 출력하고, 둘째 줄에 최댓값이 몇 번째 수인지를 출력한다.
-------------------------------------------------------------------------
입력 예제1)
3
29
38
12
57
74
40
85
61
출력 예제1)
85
8
-------------------------------------------------------------------------
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const numbers = input.map(Number);

let max = numbers[0];

// 반복문을 돌며 큰 경우 max 에 대입
for(let index=1; index<numbers.length; index++) {
    if(max < numbers[index]) {
        max = numbers[index];
    }
}
const indexOfMax = numbers.indexOf(max)+1;
const result = max + '\n' + indexOfMax;

console.log(result)

// console.log(numbers);
// console.log(typeof numbers[0]);
// console.log(numbers.indexOf(74))
