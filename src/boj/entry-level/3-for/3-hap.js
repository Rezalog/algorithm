/*
1. 단계별로 풀어보기 - for - 8393 - 합

문제)
n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.
-------------------------------------------------------------------------
입력)
첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.

출력)
1부터 n까지 합을 출력한다.
-------------------------------------------------------------------------
입력 예제1)
3
출력 예제1)
6
-------------------------------------------------------------------------
*/

// 내 풀이 1
// const input = require('fs').readFileSync('/dev/stdin').toString().trim();
// const num = +(input);

// console.log(num*(num+1)/2)

// 내 풀이 2
const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const num = +(input);
let sum=0;

for(let i=1; i<=num; i++) {
    sum += i;
}
console.log(sum);