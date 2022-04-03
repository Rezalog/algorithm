/*
1. 단계별로 풀어보기 - 1차원 배열 - 10818 - 최소, 최대

문제)
N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.
-------------------------------------------------------------------------
입력)
첫째 줄에 정수의 개수 N (1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄에는 N개의 정수를 공백으로 구분해서 주어진다. 
모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다.
출력)
첫째 줄에 주어진 정수 N개의 최솟값과 최댓값을 공백으로 구분해 출력한다.
-------------------------------------------------------------------------
입력 예제1)
5
20 10 35 30 7
출력 예제1)
7 35
-------------------------------------------------------------------------
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const count = +input[0];
const numbers = input[1].split(' ').map(Number);

// min, max 를 numbers[0]으로 고정해놓고
// index를 1부터 돌면서 numbers.length까지 돌며 
// numbers[0]보다 numbers[index]가 더 작은경우는 min에, 큰 경우에는 max에 담는다

let min = numbers[0];
let max = numbers[0];

for(let index=1; index<numbers.length; index++) {

    if(min > numbers[index]) {
        min = numbers[index];
    }
    if(max < numbers[index]) {
        max = numbers[index];
    }
}
// console.log(`${min} ${max}`);
console.log(min,max);