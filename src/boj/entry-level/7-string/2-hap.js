/*
1. 단계별로 풀어보기 - 문자열 - 11720 - 숫자의 합

문제)
N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.

입력)
첫째 줄에 숫자의 개수 N (1 ≤ N ≤ 100)이 주어진다. 둘째 줄에 숫자 N개가 공백없이 주어진다.

출력)
입력으로 주어진 숫자 N개의 합을 출력한다.


-------------------------------------------------------------------------
입력 예제1)
25
7000000000000000000000000
출력 예제1)
7
:
입력 예제1)
11
10987654321
출력 예제1)
46
-------------------------------------------------------------------------
*/

// 나의 풀이)
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input[0];
const numberStr = input[1];

function strSum(str) {

    let sum = 0;
    for(let i=0; i<n; i++) {
        sum += Number(String(str).charAt(i));
    }
    return sum;
}
console.log(strSum(numberStr));