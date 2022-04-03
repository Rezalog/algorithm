/*
1. 단계별로 풀어보기 - 함수 - 1065 - 한수

문제)
어떤 양의 정수 X의 각 자리가 등차수열을 이룬다면, 그 수를 한수라고 한다. 
등차수열은 연속된 두 개의 수의 차이가 일정한 수열을 말한다. 

N이 주어졌을 때, 1보다 크거나 같고, 
N보다 작거나 같은 한수의 개수를 출력하는 프로그램을 작성하시오. 


입력)
첫째 줄에 1,000보다 작거나 같은 자연수 N이 주어진다.

출력)
첫째 줄에 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력한다.
-------------------------------------------------------------------------
입력 예제1)
110
출력 예제1)
99

입력 예제1)
1
출력 예제1)
1
    :
입력 예제1)
1000
출력 예제1)
144

-------------------------------------------------------------------------
*/

// 나의 풀이
//-- 정답

// 한수 : 어떤 양의 정수 X의 각 자리가 등차수열을 이루는 수 
// 등차수열 : 연속된 두 개의 수의 차이가 일정한 수열을 말한다. 
// (1 <= hansu <= n)
/* ex) 
    110 : 0 1 
    109 : 1 9
    108 : 1 8
     :
    101 : 1 1?  1 -1?
    100 : 1 0
    99 : 0
    일,십의 자리 수는 모두 적용 : 1~99 : 99개

    101이 적용안되는 것으로 나타나 절댓값 차이가 아닌 것으로 보임.
*/
const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const n = +input;

// 한수의 수학적 특징 알아보기(1~n)
// 321 : d=-1
// 123 : d=1
// 135 : d=2
// 111 : d=0

// 1. 백의 자리 숫자이상부터 의미가 있다 : n이 100보다 작으면 console.log(n)을 반환
// if(n<100) return console.log(n);

// 2. function hansu : 
//    n을 string으로 변환, 각 자리마다 공차를 구하고 같으면 해당 숫자를 return
function hansu(n) {
    
    let dArr = [];
    let d;

    for(let i=0; i<String(n).length-1; i++) {
        
        // n이 백의 자리
        d = Number(String(n).charAt(i))-Number(String(n).charAt(i+1));
        dArr.push(d);
        // 256 
        // String(n).length-1 : 2 -> i : 0~1
        // i=0
        // d = 2 - 5 = -3
        // i=1
        // d = 5 - 6 = -1
    }
    // dArr의 원소가 모두 같은지 확인 : true 면 한수
    // Array.prototype.every(), reduce 사용
    // ref : http://daplus.net/javascript-%EB%B0%B0%EC%97%B4%EC%9D%98-%EB%AA%A8%EB%93%A0-%EA%B0%92%EC%9D%B4-%EA%B0%99%EC%9D%80%EC%A7%80-%ED%99%95%EC%9D%B8%ED%95%98%EC%8B%AD%EC%8B%9C%EC%98%A4/
    return dArr.every(el => el===dArr[0])
}
// console.log(hansu(n));

// 3. hansu만 있는 배열의 길이를 console.log
let hansuArr = [];
for(let i=1; i<=n; i++) {
    if(hansu(i)) {
        hansuArr.push(i);
    }
}
// console.log(hansuArr);
console.log(hansuArr.length);


// 다른 풀이) ---------------------------------------
// ref) https://velog.io/@dragoocho/%EB%B0%B1%EC%A4%80-1065-%EB%B2%88-Node.js-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4
//-- 1000의 자리 숫자까지 신경써서 공차 배열을 만들어 every로 비교했는데
//-- 현 문제에서는 필요없었던 것 같다

// const fs = require("fs");
// const [n] = (
//   process.platform === "linux"
//     ? fs.readFileSync("/dev/stdin").toString()
//     : `1000
// `
// )
//   .trim()
//   .split("\n");

// let N = Number(n);

// let count = 0;

// for (let i = 1; i <= N; i++) {
//   let nArr = String(i);
//   if (i < 100) {
//     count++;
//     continue;
//   }
//   let A = Number(nArr[0]) - Number(nArr[1]);
//   let B = Number(nArr[1]) - Number(nArr[2]);
//   if (A === B) {
//     count++;
//   }
// }

// console.log(count);

/*

이번 문제는 지문의 올바른 해석이 아주 중요했다. 1~ 110의 결과에서 1~99는 한수로 인정되는가를 찾는 발상이 없으면 풀기가 너무나 어렵게된다.

우선 "등차수열은 연속된 두 개의 수의 차이가 일정한 수열을 말한다." 조건을 이해해야 한다. 각각 3개의 숫자 사이가 일치되는 것이다. 그럼 1자리 수와 10의자리 수는 연속된 수의 차이가 나오지 않는데 그런 숫자는한수로 인정되는가가 문제다. 예제출력 1를 보면 1~ 99의 숫자 모두 인정된다는 걸 알 수 있다.

한수로 인정되는 조건을 바로 생각해보면 123, 135, 147, 159 같은게 한수일 것 이다.
111, 222, 333은 어떨까? 차이가 0인 것도 서로 똑같으니 일정한 차이라고 볼 수 있다.
그 조건대로 짠다면 문자열로 변환 후 한자리씩 따와서 인접한 숫자끼리 뺄셈한 결과가 같으면 한수가 나오게 되는 것이다. 그러한 숫자들을 이미 한수로 인정된 99개의 카운트숫자에 더하면 출력 할 값이 나온다.

1000은 한수가 아니다. 그래도 짜놓은 로직대로면 100을 대조하는거라 굳이 고치지 않아도 예제대로 144가 나온다.

*/
