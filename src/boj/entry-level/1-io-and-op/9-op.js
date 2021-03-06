/*
1. 단계별로 풀어보기 - 입출력과 사칙연산 - 10869 - 사칙연산

문제)
두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오. 

-------------------------------------------------------------------------
입력)
두 자연수 A와 B가 주어진다. (1 ≤ A, B ≤ 10,000)

출력)
첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.
-------------------------------------------------------------------------
입력 예제1)
7 3

출력 예제1)
10
4
21
2
1
-------------------------------------------------------------------------
*/

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let a = input[0];
let b = input[1];
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(Math.floor(a/b))
console.log(a%b)

/*
- LEARNED
Math.floor()는 어떤 수보다 크지 않은 최대의 정수를 반환합니다. -- 버림
Math.ceil()는 어떤 수보다 작지 않은 최소의 정수를 반환합니다. -- 올림
Math.round()는 어떤 수와 가장 가까운 정수를 반환합니다. -- 반올림
*/