/*
1. 단계별로 풀어보기 - 1차원 배열 - 1546 - 평균

문제)
세준이는 기말고사를 망쳤다. 세준이는 점수를 조작해서 집에 가져가기로 했다. 
일단 세준이는 자기 점수 중에 최댓값을 골랐다. 이 값을 M이라고 한다. 
그리고 나서 모든 점수를 점수/M*100으로 고쳤다.

예를 들어, 세준이의 최고점이 70이고, 수학점수가 50이었으면 
수학점수는 50/70*100이 되어 71.43점이 된다.

세준이의 성적을 위의 방법대로 새로 계산했을 때, 
새로운 평균을 구하는 프로그램을 작성하시오.

입력)
첫째 줄에 시험 본 과목의 개수 N이 주어진다. 이 값은 1000보다 작거나 같다. 
둘째 줄에 세준이의 현재 성적이 주어진다. 
이 값은 100보다 작거나 같은 음이 아닌 정수이고, 적어도 하나의 값은 0보다 크다.


출력)
첫째 줄에 새로운 평균을 출력한다. 
실제 정답과 출력값의 절대오차 또는 상대오차가 10-2 이하이면 정답이다.

-------------------------------------------------------------------------
입력 예제1)
3
40 80 60
출력 예제1)
75.0

입력 예제2)
3
10 20 30
출력 예제2)
66.666667
-- 10-2 이하의 오차를 허용한다는 말은 정확히 소수 2번째 자리까지 출력하라는 뜻이 아니다.


입력 예제3)
4
1 100 100 100
출력 예제3)
75.25

:

입력 예제8)
9
10 20 30 40 50 60 70 80 90
출력 예제8)
55.55555555555556
-------------------------------------------------------------------------
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const subjects = +input[0];
const scores = input[1].split(' ').map(Number);


// 1. 최고 점수 M 구하기
// 2. 모든 점수 고치기 : 점수/M*100
// 3. 새로운 평균 출력(10-2 오차)

// 1.
let M = scores[0];

for(let index=1; index<scores.length; index++) {
    if(M < scores[index]) {
        M = scores[index];
    }
}
// console.log(M);

// 2.
const fixedScores = scores.map((score)=>{
    return score = score/M*100
})
// console.log(fixedScores);
//-- 50, 100, 75
//-- return 을 해주지 않으면 undefined가 요소로 들어가 있는다

// 3.
let sum=0; 
for(let i=0; i<fixedScores.length; i++) {
    sum += fixedScores[i];
}

console.log(sum/subjects);

// 참고(toFixed())
/*
    num = 123.123456789
    num.toFixed(3);
    --> 123.123
    num.toFixed(5);
    --> 123.12346
    --반올림됨
*/

// 다른 풀이)
//-- reduce 로 총합 구하고 평균
//-- '스페셜 저지'는 출력 결과가 조건에만 맞으면 
//-- 예제의 결과와 같이 정확히 맞지 않지 않아도 정답을 측정할 수 있는 문제이다. 
//-- 위 문제는 소수점 아래 자리수가 정확히 예제 결과처럼 나오도록 하지 않아도 된다.




// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let subject = Number(input[0]);

// let score = input[1].split(' ');
// let scoreNum = [];
// for (let i = 0; i < subject; i++) {
//   scoreNum.push(Number(score[i]));
// }

// let maxScore = scoreNum[0];
// for (let i = 1; i < scoreNum.length; i++) {
//   if (maxScore < scoreNum[i]) {
//     maxScore = scoreNum[i];
//   }
// }

// let newScore = [];
// newScore = scoreNum.map(function(score) {
//   return score / maxScore * 100;
// });

// let scoreSum = newScore.reduce(function(acc, cur) {
//   return acc + cur;
// });

// console.log(scoreSum / subject);