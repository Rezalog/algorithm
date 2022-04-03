/*

05_firstReverse

문제
문자열을 입력받아 순서가 뒤집힌 문자열을 리턴해야 합니다.

입력
인자 1 : str
string 타입의 문자열
출력
string 타입을 리턴해야 합니다.
입출력 예시
let output = firstReverse('codestates');
console.log(output); // "setatsedoc"

output = firstReverse('I love codestates');
console.log(output); // "setatsedoc evol I"
힌트
배열은 arr.reverse를 통해 쉽게 뒤집을 수 있습니다.
*/

// 현재 풀이)--------------------------------
function firstReverse(str) {
    let arr = str.split('');
    let rArr = arr.reverse();
    let newStr = rArr.join('');

    return newStr;
}
console.log(firstReverse('codestates beb 03'));





// 이전 풀이)-------------------------------

// function firstReverse(str) {
//     // TODO: 여기에 코드를 작성합니다.
//     // helloworld
//     // dlr..
//     // str의 맨마지막부터 reverseStr에 반복문으로 += 해준다.
//     let reverseStr = '';
//     let tempStr = str;
//     if(str==='') return '';
//       else {
//         while(tempStr.length>0) {
//           reverseStr += tempStr.slice(-1);
//           // tempStr = 'hello world', reverseStr = 'd'
//           // tempStr에 'hello worl'만 남도록 한다
//           tempStr = tempStr.substr(0, str.length-reverseStr.length);
//         }
//     }
//     return reverseStr;
//   }
  // console.log(`tempStr : ${tempStr}`);
  // console.log(`tempStr 길이 : ${tempStr.length}`);
  // console.log(`reverseStr : ${reverseStr}`);
  // console.log(`reverseStr 길이 : ${reverseStr.length}`);
  // console.log(firstReverse("hello world"));