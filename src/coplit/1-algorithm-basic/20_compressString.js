/*
20_compressString
compressString
문제
문자열을 입력받아 연속되는 문자가 있을 경우, 연속 구간을 반복되는 수와 문자로 조합한 형태로 압축한 문자열을 리턴해야 합니다.

입력
인자 1 : str
string 타입의 알파벳 문자열
출력
string 타입을 리턴해야 합니다.
주의 사항
빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
3개 이상 연속되는 문자만 압축합니다.
입출력 예시
let output = compressString('abc');
console.log(output); // --> abc

output = compressString('wwwggoppopppp');
console.log(output); // --> 3wggoppo4p
*/

// ref code)
function compressString(str) {
    // 연속되는 문자를 기록하기 위한 변수
    // 첫 번째 문자로 초기화
    let before = str[0];
  
    // 동일한 문자의 반복 횟수
    let count = 1;
  
    // 정답으로 리턴할 문자열
    let result = '';
  
    // 마지막 부분이 연속된 문자일 경우를 위해 dummy 문자 추가
    str = str + ' ';
    for (let i = 1; i < str.length; i++) {
      // 동일한 문자가 반복될 경우
      if (before === str[i]) {
        count++;
      } else {
        // 이전과 다른 문자일 경우,
        // 반복된 횟수가 3 이상일 경우에만 압축을 한다.
        if (count >= 3) {
          result = result + `${count}${before}`;
        } else {
          result = result + before.repeat(count);
        }
        before = str[i];
        count = 1;
      }
    }
  
    return result;
  }

// 22/4/3
//-- 4 passes of 5 tests
//--(미충족) "wwwggopp"을(를) 입력받은 경우, "3wggopp"을(를) 리턴해야 합니다
//-- AssertionError: expected '3wggoo3p' to deeply equal '3wggopp'

// function compressString(str) {
//     // if(str === '') return '';
    
//     let count = 1;
//     let newStr = '';
    
//     for(let i=0; i<str.length; i++) {
//         if(str[i]===str[i+1]) {
//             count++;
//         } else {
//             if(count>=3) {
//             // 연속되는 경우이므로 count가 3이상이면 
//             // 다른 문자열이 나올때까지 newStr에 추가하지 않다가
//             // 문자열이 달라지면 count수 + 반복되었던 문자열을 추가함

//             newStr += (count + str[i])
//             count = 1;

//             } else {
//                 newStr += str[i].repeat(count);
//             }
//         }
//     }

//     return newStr;
// }

// console.log(compressString('abc'));
// console.log(compressString('wwwggoppopppp'));

// prev)
// function compressString(str) {
//     // TODO: 여기에 코드를 작성합니다.
//      let count = 1;
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === str[i + 1]) {
//         count++;
//       } else {
//         if (count >= 3) {
//           result += count + str[i];
//         } else {
//           result += str[i].repeat(count);
//         }
//         count = 1;
//       }
//     }
//     return result;
//   }