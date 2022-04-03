/*
1. 단계별로 풀어보기 - for - 10950 - A+B-3

문제)
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
-------------------------------------------------------------------------
입력)
첫째 줄에 테스트 케이스의 개수 T가 주어진다.
각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

출력)
각 테스트 케이스마다 A+B를 출력한다.
-------------------------------------------------------------------------
입력 예제1)
5
1 1
2 3
3 4
9 8
5 2
출력 예제1)
2
5
7
17
7
-------------------------------------------------------------------------
*/

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const numberOfTest = Number(input[0]);
let testNumbers;

for(let i=1; i<=numberOfTest; i++) {
    testNumbers = input[i].split(' ');
    console.log(Number(testNumbers[0]) + Number(testNumbers[1]));
}



// 다른 풀이 1)
//-- value 에 + 를 앞에 작성하면 숫자로 바뀌는듯..
// const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
// const count = +input[0];
// for (i=1; i < count+1; i++){
//     const n = input[i].split(' ').map(val=>+val);
//     console.log(n[0]+n[1]);
// }

// 다른 풀이 2)
// const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().split('\n');
// let string = '';
// const n = +(input.splice(0,1)); 
// for(i = 0; i < n; i++){
//     let nmbrs = input[i].split(' ').map(val=>+val);
//     let [a,b] = nmbrs;
//     string += `${a+b}
// `;
// }
// console.log(string);

