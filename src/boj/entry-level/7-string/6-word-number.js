/*
1. 단계별로 풀어보기 - 문자열 - 1152 - 단어의 개수

문제)
영어 대소문자와 공백으로 이루어진 문자열이 주어진다. 
이 문자열에는 몇 개의 단어가 있을까? 이를 구하는 프로그램을 작성하시오. 
단, 한 단어가 여러 번 등장하면 등장한 횟수만큼 모두 세어야 한다.

입력)
첫 줄에 영어 대소문자와 공백으로 이루어진 문자열이 주어진다. 
이 문자열의 길이는 1,000,000을 넘지 않는다. 
단어는 공백 한 개로 구분되며, 공백이 연속해서 나오는 경우는 없다. 
또한 문자열은 공백으로 시작하거나 끝날 수 있다.

출력)
첫째 줄에 단어의 개수를 출력한다.

-------------------------------------------------------------------------
입력 예제1)
The Curious Case of Benjamin Button
출력 예제1)
6

입력 예제1)
 The first character is a blank
출력 예제1)
6
-- The 앞 공백 있음

입력 예제1)
The last character is a blank 
출력 예제1)
6
-- blank 뒤 공백 있음

-------------------------------------------------------------------------
*/

// 내 첫 풀이)
//-- 출력은 맞으나, 오답
//-- 원인 : 어떠한 글자도 없고 공백조차 없는 입력을 적용하면 따옴표가 적용되어 배열의 길이가 1로써 존재하는 신기하다면 신기한 경우가 있다. 즉 단어도 빈공간도 아무것도 안넣는 테스크 케이스를 생각 못한게 원인이였다.
//         원인을 알게되니 빈 요소가 생겼을시에 그 배열의 첫번째 요소만 지운다는 조건문을 추가하는 발상을 바로 떠올렸고 그 발상 하나로 정답
// //-- ref) https://velog.io/@dragoocho/%EB%B0%B1%EC%A4%80-1152-%EB%B2%88-Node.js-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString(); //-- trim 하지 않음
// // console.log(input);

// // 1. 중간에 여러 공백은 없으므로, 맨 앞 뒤로 먼저 trim 한다
// const trimedInput = input.trimStart().trimEnd();
// // console.log(trimedInput);

// // 2. 중간 공백을 기준으로 배열에 담고, 해당 배열의 길이를 출력
// let result = trimedInput.split(' ');

// //-- split(" ")에서 아무것도 입력받지 않은("") 상태 일때 result.length===1 임을 처리해줌 
// if(result[0]==="") result.pop();

// console.log(result.length);


// 다른 풀이)-----------------------------------------------------

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

// console.log(input); 
//  The first character is a blank
//-- [ 'The', 'first', 'character', 'is', 'a', 'blank' ]
//--(아무것도 입력 x)
//--[ '' ] 

console.log(input[0] === '' ? 0 : input.length);

