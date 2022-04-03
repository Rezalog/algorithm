/*
1. 단계별로 풀어보기 - 함수 - 4673 - 셀프 넘버

문제)
셀프 넘버는 1949년 인도 수학자 D.R. Kaprekar가 이름 붙였다. 
양의 정수 n에 대해서 d(n)을 n과 n의 각 자리수를 더하는 함수라고 정의하자. 

예를 들어, d(75) = 75+7+5 = 87이다.
양의 정수 n이 주어졌을 때, 
이 수를 시작해서 n, d(n), d(d(n)), d(d(d(n))), ...과 같은 
무한 수열을 만들 수 있다. 

예를 들어, 33으로 시작한다면 다음 수는 33 + 3 + 3 = 39이고, 
그 다음 수는 39 + 3 + 9 = 51, 다음 수는 51 + 5 + 1 = 57이다. 
이런식으로 다음과 같은 수열을 만들 수 있다.

33, 39, 51, 57, 69, 84, 96, 111, 114, 120, 123, 129, 141, ...

n을 d(n)의 생성자라고 한다. 
위의 수열에서 33은 39의 생성자이고, 39는 51의 생성자, 51은 57의 생성자이다. 
생성자가 한 개보다 많은 경우도 있다. 

예를 들어, 101은 생성자가 2개(91과 100) 있다. 

생성자가 없는 숫자를 셀프 넘버라고 한다. 
100보다 작은 셀프 넘버는 총 13개가 있다. 
1, 3, 5, 7, 9, 20, 31, 42, 53, 64, 75, 86, 97

10000보다 작거나 같은 셀프 넘버를 한 줄에 하나씩 출력하는 프로그램을 작성하시오.

입력)
입력은 없다.

출력)
10,000보다 작거나 같은 셀프 넘버를 한 줄에 하나씩 증가하는 순서로 출력한다.
-------------------------------------------------------------------------
입력 예제1)

출력 예제1)
1
3
5
7
9
20
31
42
53
64
 |
 |       <-- a lot more numbers
 |
9903
9914
9925
9927
9938
9949
9960
9971
9982
9993
-------------------------------------------------------------------------
*/

// d(n)의 생성자 n에서, 생성자가 없는 즉 n이 없는 숫자를 셀프 넘버라고하고,
// 이 셀프 넘버를 1부터 10000까지 모두 출력

// 수열 : n, d(n), d(d(n)), ...
// (n이 10의 자리 일 때)
// d(n) = n + Math.floor(n/10) + n%10

// (n이 100의 자리 일 때) -- 534 => 534 + 5+3+4 
// d(n) = n + Math.floor(n/100) + Math.floor((n-Math.floor(n/100))/10) + n%10
// (n이 1000의 자리 일 때
// d(n) = n + n/10 + n%10)
// function seqN(n) {
//     let construct = 0;
//     if(n<10) {
//         return 2*n+1
//     }
//     if(n>10 && n<100) {
//         return n+Math.floor(n/10) + n%10
//     }
//     return false;
// }

// let self=0;
// while(self<1000) {
//     self++;
//     if(!seqN(self)) {
//         console.log(self);
//     }
// }

// 다른 풀이 1)------------------------------------------

// https://laycoder.tistory.com/185

// [0~10000]수의 배열을 만들고 아닌 수를 구한 다음,
// [0~10000] 에서 아닌 수를 걸러내고 출력하는 방식으로 풀었는데 합격은 했으나 메모리 소비가 굉장히 심했다.

// 다른 풀이를 참고하여
// [0~10000]의 배열을 생성하여 전부 true를 넣어주고 셀프넘버가 아닌 수만 false로 바꿔 준 다음
// true인 인덱스만 출력하는 방식으로 바꾸니 메모리 소비를 현저히 줄일 수 있었다.

// function d(n) {
//     // n = 34
//     // number = 34, result = 0

//     let number = n;
//     let result = 0;
    
//                     //         34       : 2
//     for (let i = 0; i < String(n).length; i++) {
//         // number를 10으로 나눠가면서 각 자리수를 result에 합한다.
//         result += number % 10; //-- (i=0) result += (3 % 10)=3
//                                //-- (i=1) result += (4 % 10)=4, result === 34
//         number = Math.floor(number / 10);
//                                 //-- (i=0) number = floor(34 / 10) = 4
//                                 //-- (i=1) number = floor(4 / 10) = 0
//     }
//     // 입력받은 수 와 result를 더하여 return
//     return n + result; //-- 34 + 
// }

// const range = 10000;
// // 0~10000 범위까지 셀프넘버 배열을 생성하고 true로 초기화.
// let selfNumbers = Array(range + 1).fill(true);

// for (let i = 0; i <= range; i++) {
//     // 셀프넘버가 아니면 false로 변환.
//     selfNumbers[d(i)] = false;
// }

// // true index만 출력
// for (let i = 0; i < range; i++) {
//     if (selfNumbers[i]) {
//         console.log(i);
//     }
// }
// // ref) sengsung.tistory.com/157

// 다른 풀이 2)------------------------------------------ 
// ex) 66 -> 6+6+66= 78 -> 7+8+78= 93 -> ... : 무한수열
//     78의 생성자는 66, 93의 생성자는 78 ..

// function notSelfNum(n){ 
//     let sum = n;
    
//       while(n>0){ 
//           sum += n%10; 
//           n= Math.floor(n/10); 
//       }
//       return sum;
//   }
  
//   const selfNum = new Array(10000); 
//   selfNum.fill(true);
  
//   for(let i=1; i<=10000; i++){
//       selfNum[notSelfNum(i)] = false;
      
//       if(selfNum[i]){
//           console.log(i);
//       }
//   }

// notSelfNum 함수에서 매개변수를 받아 그 다음 수를 만든다. 즉 매개변수 n은 생성자이다.
// 길이가 10000인 selfNum 배열을 만든 후, 모두 true값으로 채워준다.
// 1부터 10000만큼 for문을 돌려 notSelfNum 함수에서 반환한 숫자의 인덱스 값들만 false로 바꿔준다.
// selfNum배열안에 true인 것들만 출력한다.

// *이 때 for문에서 10000대신 selfNum.length를 썼더니 메모리 초과가 났다.


// 다시 풀어보기)------------------------------------------

// selfnumber(생성자가 없는 숫자) :  1, 3, 5, 7, 9, 20, 31, 42, 53, 64, 75, 86, 97
// 2=1+1, 4=2+2, ... 18=9+9 
// 19 = 14 + 1 + 4 ...
// 결국 셀프넘버가 아닌 숫자, 즉 직접 n 을 넣었을 때의 d(n) 숫자마다의 숫자 sum을
// 대입해주면서 '셀프넘버가 아닌 수'를 찾고,
// 그 외의 숫자가 셀프넘버가 되는 점을 이용하여 푼다


// n이 생성자 일때 셀프넘버가 아닌, n이 만든 수열 d(n)
function notSelfNumber(n) {
     
    let sum=0;
    for(let i=0; i<String(n).length; i++) {
        // 263 : 100의 자리 : 3번 돌면서 sum에 +=
        // '2' + '6' + '3'+ '263(n)'
        sum += Number(String(n).charAt(i));
    }
    sum += n;
    return sum;
}

// 10000까지 배열의 길이를 만들어 true로 채우고
let selfNumberArr = Array(10000).fill(true); // index: 0~9999

// 1~10000까지 notSelfNumber(i)의 결과의 인덱스를 false로 바꿈
for(let i=1; i<=10000; i++) {
    selfNumberArr[notSelfNumber(i)] = false;
    // 
    
    if(selfNumberArr[i]) { // selfNumber가 true 인 요소인 경우의 i(인덱스) 출력
    //    console.log(i); 
    }
}
console.log(test);
// console.log(selfNumberArr[0]);
// console.log(selfNumberArr[10001]);