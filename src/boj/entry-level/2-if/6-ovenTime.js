/*
1. 단계별로 풀어보기 - if문 - 2525 - 오븐 시계

문제)
KOI 전자에서는 건강에 좋고 맛있는 훈제오리구이 요리를 간편하게 만드는 인공지능 오븐을 개발하려고 한다. 
인공지능 오븐을 사용하는 방법은 적당한 양의 오리 훈제 재료를 인공지능 오븐에 넣으면 된다. 
그러면 인공지능 오븐은 오븐구이가 끝나는 시간을 분 단위로 자동적으로 계산한다. 

또한, KOI 전자의 인공지능 오븐 앞면에는 사용자에게 훈제오리구이 요리가 끝나는 시각을 알려 주는 디지털 시계가 있다. 

훈제오리구이를 시작하는 시각과 오븐구이를 하는 데 필요한 시간이 분단위로 주어졌을 때, 
오븐구이가 끝나는 시각을 계산하는 프로그램을 작성하시오.

-------------------------------------------------------------------------
입력)
첫째 줄에는 현재 시각이 나온다. 
현재 시각은 시 A (0 ≤ A ≤ 23) 와 분 B (0 ≤ B ≤ 59)가 정수로 빈칸을 사이에 두고 순서대로 주어진다. 
두 번째 줄에는 요리하는 데 필요한 시간 C (0 ≤ C ≤ 1,000)가 분 단위로 주어진다. 

출력)
첫째 줄에 종료되는 시각의 시와 분을 공백을 사이에 두고 출력한다. 
(단, 시는 0부터 23까지의 정수, 분은 0부터 59까지의 정수이다. 
    디지털 시계는 23시 59분에서 1분이 지나면 0시 0분이 된다.)
-------------------------------------------------------------------------
입력 예제1)
14 30
20
출력 예제1)
14 50

입력 예제2)
17 40
80
출력 예제2)
19 0

입력 예제3)
23 48
25
출력 예제3)
0 13
-------------------------------------------------------------------------
*/

// 오답 1)
// // readline 처럼 한줄씩 input의 index 에 담긴다(즉 input[0] 에는 현재시각을 공백으로 나눈 값이 2차원배열형태로 담김)
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// // console.log(input);
//     // 12 30
//     // 50
//     //-- [ '12 30', '50' ]
// // 다시한번 split으로 공백처리 하여 각각 담음
// let time = input[0].split(' ');
// let hour = parseInt(time[0]);
// let min = parseInt(time[1]);
// // console.log(hour,min);
// // 12 30
// // 50
// //-- 12 30
// let cook = parseInt(input[1]);


// if(cook>=60) {
//     cook -= 60; // cook = 20
//     hour += 1; // 18 
//     min += cook; // min += 20, min = 60
//     if(min>=60) {
//         min-=60; // min = 0
//         hour+=1; // hour = 19
//     }
//     if(hour>=24) {
//         hour=0
//     }
// } else if(cook<60){
//     min += cook;
//     if(min>=60) {
//         min-=60; // min = 0
//         hour+=1; // hour = 19
//     }
//     if(hour>=24) {
//         hour=0
//     }
// }

// console.log(hour,min);

// 풀이 1)
// 모든 시간을 분으로 바꾸고, 연산한 값에서 60을 나눈 값과 60을 나눴을 때의 나머지를 시와 분으로 나눴습니다.
// 만약 23시 30분에서 1000분의 요리시간이 걸린다면, 40시 10분이 나올 수 있기에, 시간 데이터가 24이거나 24가 넘어갈 땐 24을 빼줘야 문제에서 원하는 시간이 나옵니다. 
// 출처: https://overcome-the-limits.tistory.com/entry/알고리즘-백준-2525-오븐-시계-with-nodejs [Plus Ultra]

// 이해 후 요약
// 1. 요리 시간까지 모두 더한 시간을 분으로 만들고, 나눈 값의 몫은 시간, 나머지는 분으로 담는다.
// 2. 출력시 시간이 24시 이상일 때를 고려한다.(분은 60으로 나눈 나머지이므로 고려할 필요없음)
// 3. 변수선언을 const 로

// 요약 후 풀이
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const current = input[0].split(' ').map(Number);
const hour = current[0];
const min = current[1];
const cook = Number(input[1]);

const cookingEndHour = Math.floor((hour*60 + min + cook)/60)
const cookingEndMin = (hour*60 + min + cook)%60;
console.log(cookingEndHour>=24?cookingEndHour-24:cookingEndHour,cookingEndMin);