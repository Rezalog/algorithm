/*
1. 단계별로 풀어보기 - 1차원 배열 - 4344 - 평균은 넘겠지

문제)
대학생 새내기들의 90%는 자신이 반에서 평균은 넘는다고 생각한다. 
당신은 그들에게 슬픈 진실을 알려줘야 한다.

입력)
첫째 줄에는 테스트 케이스의 개수 C가 주어진다.

둘째 줄부터 각 테스트 케이스마다 
학생의 수 N(1 ≤ N ≤ 1000, N은 정수)이 첫 수로 주어지고, 
이어서 N명의 점수가 주어진다. 
점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.


출력)
각 케이스마다 한 줄씩 평균을 넘는 학생들의 비율을 반올림하여 
소수점 셋째 자리까지 출력한다.

-------------------------------------------------------------------------
입력 예제1)
5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91

출력 예제1)
40.000%
57.143%
33.333%
66.667%
55.556%
-------------------------------------------------------------------------
*/

// 나의 풀이)
//-- 출력은 맞는데 틀렸다고 뜸..
//-- 해결) score 변수의 slice(1) 위치를 split() 앞에서 뒤로 옮겼더니 해결
//-- 참고)
/*
slice()와 splice()는 배열을 다룰 때 자주 사용하는 함수이다.

두 함수는 언뜻 보기에 비슷한 기능을 하는 것처럼 보이지만 큰 차이점이 있다.

출처: https://im-developer.tistory.com/103 [Code Playground]

*/

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const testCase = +input[0];

// for(let i=1; i<=testCase; i++) {
//     let studentNum = +input[i][0]
//     let scores = input[i].split(' ').slice(1, studentNum).map(Number);
    
//     // 1. 평균 계산
//     // 2. 평균을 넘는 학생 수 count
//     // 3. 평균을 넘는 학생 수가 해당 반의 몇 %인지 출력
    
//     // 1.
//     let sum = scores.reduce((acc, cur) => {
//         return acc+cur;
//     })
//     let avgScore = sum / studentNum;
//     // avgScore.toFixed(3);
//     // console.log(avgScore.toFixed(3));

//     // 2. 
    
//     let better = scores.filter(score=>score>avgScore)
//     // let overAvgNum = 0;
//     // scores.forEach(score => {

//     //     if(score>avgScore) {
//     //         overAvgNum++;
//     //     }
//     // })

//     // 3. 
//     let ratio = (better.length / studentNum)*100
//     const ratioRound = ratio.toFixed(3)
//     console.log(`${ratioRound}%`);
// }

// 다른 풀이
const fs = require('fs');
  const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
  const caseNum = +input[0];
  for(let i=1;i<=caseNum;i++){
    let crrCase = input[i].split(' ').map(val=>+val);
    let studentNum = crrCase[0];
    let scores = crrCase.splice(1,studentNum);
    let sum = scores.reduce((pre,cur)=>{return pre + cur})
    let average = sum/studentNum;
    let better = scores.filter((el) => average < el); 
    let ratio = better.length/studentNum*100;
    let ratioRound = ratio.toFixed(3);
    console.log(`${ratioRound}%`);
  }

// 우선 생각나는 대로 구현하고 제출 해 봤는데 틀렸다. 테스트는 안해봄. 찬찬히 뜯어봐야쓰것다. 적으면서 못미더운 부분도 많았으니.
// 근데 범인을 바로 찾았다. splice 하는 것에 사소한 문제가 있었고, Arrow 함수에서 {}를 사용할 경우에는 꼭 return을 해 주어야 한다.
// 테스트상에서는 되는데 백준 제출시 틀렸다고 나온다. 무엇이 문제인가? 난감하구먼.
// 출력에 %를 안붙였다. 붙이니 맞음. 출력의 형태를 간과하지 말자.

// *****for 보다 reduce로 배열의 합을 구하는 것이 메모리를 약 430K정도 덜 잡아먹는다.
