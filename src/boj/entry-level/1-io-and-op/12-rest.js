/*
1. 단계별로 풀어보기 - 입출력과 사칙연산 - 10430 - 나머지

문제)
(A+B)%C는 ((A%C) + (B%C))%C 와 같을까?

(A×B)%C는 ((A%C) × (B%C))%C 와 같을까?

세 수 A, B, C가 주어졌을 때, 위의 네 가지 값을 구하는 프로그램을 작성하시오.

-------------------------------------------------------------------------
입력)
첫째 줄에 A, B, C가 순서대로 주어진다. (2 ≤ A, B, C ≤ 10000)

출력)
첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 
셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.
-------------------------------------------------------------------------
입력 예제1)
5 8 4

출력 예제1)
1
1
0
0
-------------------------------------------------------------------------
*/
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let A = input[0];
let B = input[1];
let C = input[2];
console.log((A+B)%C); // (5+8)%4 = 13%4 = 1
console.log(((A%C) + (B%C))%C); // ((5%4) + (8%4))%4 = (1+0)%4 = 1
console.log((A*B)%C); // (5*8)%4 = 0
console.log(((A%C) * (B%C))%C); // ((5%4) * (8%4))%4 = (1*0)%4 = 0