/*
1. 단계별로 풀어보기 - while - 10952 - A+B-5

문제)
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
-------------------------------------------------------------------------
입력)
입력은 여러 개의 테스트 케이스로 이루어져 있다.
각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)
입력의 마지막에는 0 두 개가 들어온다.

출력)
각 테스트 케이스마다 A+B를 출력한다.
-------------------------------------------------------------------------
입력 예제1)
1 1
2 3
3 4
9 8
5 2
0 0
출력 예제1)
2
5
7
17
7
-------------------------------------------------------------------------
*/

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let result = '';
let i=0;

while(i<input.length) {
    let left = parseInt(input[i].split(' ')[0]);
    let right = parseInt(input[i].split(' ')[1]);
    if(left+right===0) break;
    result += left+right+"\n"
    i++;
}
console.log(result.trimEnd());

// 다른 풀이 1)
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// for (let i = 0; i < input.length - 1; i++) {
//     let numbers = input[i].split(' ').map(v => v * 1);
    
//     console.log(numbers[0] + numbers[1]);
// }

// 다른 풀이 2)
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// while (input[0][0] != 0) {
//     const numbers = input.shift().split(" ");
    
//     console.log(+numbers[0] + +numbers[1]);
// }