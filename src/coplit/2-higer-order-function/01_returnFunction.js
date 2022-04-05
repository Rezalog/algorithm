/*
01_returnFunction
returnFunction
문제
'Hello HoF!' 리턴하는 함수를 리턴해야 합니다.

입력
없음
출력
함수를 리턴해야 합니다.
주의 사항
리턴하는 함수의 입력값은 없습니다.
입출력 예시
let output = returnFunction();
console.log(output()); // --> 'Hello HoF!'

*/


// 22/4/3
function returnFunction() {
    
    return function() {
        return 'Hello HoF!'
    };
}


// prev)
// function hello() {
//     return 'Hello HoF!';
//   }
  
//   function returnFunction() {
//     // TODO: 여기에 코드를 작성합니다.
//     return hello;
//   }
  