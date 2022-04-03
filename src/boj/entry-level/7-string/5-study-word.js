/*
1. 단계별로 풀어보기 - 문자열 - 1157 - 단어 공부

문제)
알파벳 대소문자로 된 단어가 주어지면, 
이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 
단, 대문자와 소문자를 구분하지 않는다.


입력)
첫째 줄에 알파벳 대소문자로 이루어진 단어가 주어진다. 
주어지는 단어의 길이는 1,000,000을 넘지 않는다.


출력)
첫째 줄에 이 단어에서 가장 많이 사용된 알파벳을 대문자로 출력한다. 
단, 가장 많이 사용된 알파벳이 여러 개 존재하는 경우에는 ?를 출력한다.


-------------------------------------------------------------------------
입력 예제1)
Mississipi
출력 예제1)
?

입력 예제1)
zZa
출력 예제1)
Z

입력 예제1)
z
출력 예제1)
Z

입력 예제1)
baaa
출력 예제1)
A
-------------------------------------------------------------------------
*/

// 1. 입력받은 문자열들 각 문자들의 종류를 분류하고 개수를 각자 세어야함
// 2. 분류한 문자들의 카운트 개수를 비교하고 
//    2개이상의 문자가 같다면 ?, 아니면 가장 큰 값의 문자 반환
// 3. ?가 아니면 console.log(str.UpperCase)

// ref) https://onelight-stay.tistory.com/368

// 이해하고 다시 푼 풀이)
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().toUpperCase().split('');
const alpha = input.filter((el, idx) => input.indexOf(el)===idx);
let alphaCount = Array(alpha.length).fill(0);
// input : 입력받은 단어를 대문자로 받고 알파벳 하나씩 쪼개 배열에 담은 것
// alpha : input 중 알파벳 요소 하나의 인덱스가 인덱스의 숫자와 같은 것, '중복제거'
// alphaCount : input 요소 중 알파벳이 몇번 들어갔는지 count한 값을 담은 배열  

// ex) mmissi
// console.log(input); //-- [ 'M', 'M', 'I', 'S', 'S', 'I', 'P', 'I' ]
// console.log(alpha); //-- [ 'M', 'I', 'S', 'P' ]
// console.log(alphaCount); //-- [ 0, 0, 0, 0 ]

// 1. input을 하나씩 돌며 alphaCount에 count를 올려준다.
// 2. alphaCount의 max 값을 구한다.
// 3. max값이 여러개 일때와 하나일때를 분기하여 해당 max값의 알파벳을 대문자로 출력해준다.

// 1. 
for(let i=0; i<input.length; i++) {
    alphaCount[alpha.indexOf(input[i])]++;
    //<=> alphaCount[alpha.indexOf('M')]
    //<=> alphaCount[0]++;
}
// console.log(alphaCount); //-- [1, 4, 4, 1] (Mississipi)

// 2.

let max = alphaCount[0];

for(let j=1; j<alphaCount.length; j++) {
    // alphaCount의 index를 돌면서 max(0번째 값)가 더 크면 max를 해당 인덱스 값으로 대체 
    if(max < alphaCount[j]) max = alphaCount[j];
}

// console.log(max); //-- 4

// 3.
// alphaCount 요소 중 max값과 같은 요소가 2개 이상 존재하면 '?' 출력
if(alphaCount.filter(el=>el===max).length>1) return console.log('?');
else {
    // max에 해당하는 알파벳 대문자 출력
    // alpha와 alphaCount의 인덱스가 일대일 대응하는 점을 이용
    return console.log(alpha[alphaCount.indexOf(max)]);
}