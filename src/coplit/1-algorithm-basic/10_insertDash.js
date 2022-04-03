/*
insertDash
문제
문자열을 입력받아 연속된 한자리 홀수 숫자 사이에 '-'를 추가한 문자열을 리턴해야 합니다.

입력
인자 1 : str
string 타입의 숫자 문자열

출력
string 타입을 리턴해야 합니다.

주의 사항
0은 짝수로 간주합니다.

입출력 예시
let output = insertDash('454793');
console.log(output); // --> 4547-9-3
*/

// 다시 )

function insertDash(str) {
    let result = str[0];
    for(let i=1; i<str.length; i++) {
        if(Number(str[i-1])%2===1 && Number(str[i])%2===1) {
            // let idx = str.indexOf(Number(str[i]));
            result += '-';
        }
        result = result + str[i]
    }
    return result;
}
console.log(insertDash('454793'));


// 현재 풀이)
// replace 썼을때 시간초과 나옴
// function insertDash(str) {
//     // 1. str의 홀수가 있으면 인덱스를 찾음
//     // 2. 그 다음 인덱스가 홀수이면 
//     //    인덱스문자+인덱스+1문자 를 인덱스문자+'-'+인덱스+1문자로 replace
//     for(let i=0; i<str.length-1; i++) {
//         if(Number(str[i])%2===1 && Number(str[i+1])%2===1) {
//             // let idx = str.indexOf(Number(str[i]));
//             str = str.replace(str[i], str[i]+'-');
//         }
//     }
//     return str;
// }
// console.log(insertDash('454793'));











// 이전 풀이)-----------------------------
// function insertDash(str) {
//     // TODO: 여기에 코드를 작성합니다.
//     let result = '';
//     for(let i=0; i<str.length; i++) {
//       if(parseInt(str[i]) % 2 === 1 && parseInt(str[i+1]) % 2 === 1) {
//         result += str[i] + '-';  
//       } else {
//         result += str[i];
//       }
//     }
//     return result;
//   }
  
