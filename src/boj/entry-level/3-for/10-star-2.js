/*
1. 단계별로 풀어보기 - for - 2439 - 별 찍기-2

문제)
첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오.
-------------------------------------------------------------------------
입력)
첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

출력)
첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.
-------------------------------------------------------------------------
입력 예제1)
5
출력 예제1)
    *
   **
  ***
 ****
*****
-------------------------------------------------------------------------
*/

// const line = +require('fs').readFileSync('/dev/stdin').toString().trim();
// let result = '';
// let star;
// let space;
// * : i=1, j=1~4 공백, j=5 *, i에서 \n
// ** : i=2, j=1~3 공백, j=4~5 *, i에서 \n
// *** : i=3, j=1~2 공백, j=3~5 *, i에서 \n
// 별의 개수 = i, 공백의 개수 = line-i

// 내 풀이)
//-- 오답, 너무 헷갈림
// for(let i=0; i<line; i++) {
//     for(space=line-star; space<line; space++) {
//         result += ' '
//     }
//     for(star=line-i; star<line+1; star++) {
//         result += '*'
//     }
    
//     result += '\n'
// }
// console.log(result.trim());

//--참고
// 2438번 문제와 유사한 문제지만, 처음 풀었을 때 공백 때문에 고민을 많이했던 기억이 있다. 공백 또한 별처럼 반복문을 이용해 찍어주면 된다.
// 앞서 2438번 문제에서 이야기하지는 않았지만 별 문제의 경우,
// 변수 i를 사용한 for 문은 줄 수를 찍어준다고 생각하고,
// 나머지 for문으로는 각 줄마다 값을 찍어준다고 생각하면 수월하게 해결할 수 있다.공식을 만든다면 다음과 같다.
// [ 전체 줄의 수 ] = [ 변수 i 를 사용한 for 문의 반복 수 ]
// [ 각 줄마다 찍힐 값의 수 ] = [ 변수 j 를 사용한 for 문의 반복 수 ] + [ 변수 k 를 사용한 for 문의 반복 수 ]
// https://velog.io/@exploit017/%EB%B0%B1%EC%A4%80Node.js-2439%EB%B2%88%EB%B3%84-%EC%B0%8D%EA%B8%B02

// 다시 푼 풀이)
//--오답
// const line = +require('fs').readFileSync('/dev/stdin').toString().trim();
// let result = '';

// for(let i=0; i<line; i++) {
//     for(let j=0; j<line-i-1; j++){
//         // 공백은 line-i-2 만큼
//         result += ' '
//     }
//     for(let k=0; k<i+1; k++) {
//         // *는 i번만큼
//         result += '*';
//     }
//     result += '\n'
// }
// console.log(result.trim())

// 📌 핵심 - repeat() 메서드
// 핵심for 반복문으로 i가 1부터 N까지 반복되도록 하고,
// repeat 메서드를 이용해 공백(" ")을 N-i만큼, *을 i만큼 출력했다.
// 왼쪽정렬 별찍기 문제는 repeat 메서드를 몰라서 for문 중첩을 통해 풀었는데,
// repeat 메서드 덕분에 간단하고 직관적인 풀이로 결과를 도출해냈다.
// 거의 3일을 고민한 고민한 문제였는데.. repeat 메서드를 아느냐모르느냐에 따라 풀이가 많이 달라졌을 문제

// 다른 풀이)
// fs 모듈로 입력값 받아오기
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();

// 입력값 N을 정수로 변환
var N = parseInt(input);
let result = '';

// for (i=1; i<N+1; i++) {
//     console.log(" ".repeat(N-i) + "*".repeat(i));
//     };
for (i=1; i<N+1; i++) {
    result += " ".repeat(N-i) + "*".repeat(i) + "\n";
};

console.log(result.trimEnd());