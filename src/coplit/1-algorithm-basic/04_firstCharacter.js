/*

04_firstCharacter

문제
문자열을 입력받아 문자열을 구성하는 각 단어의 첫 글자로 이루어진 문자열을 리턴해야 합니다.

입력
인자 1 : str
string 타입의 공백이 있는 알파벳 문자열

출력
string 타입을 리턴해야 합니다.

주의 사항
단어는 공백 한 칸으로 구분합니다.
연속된 공백은 없다고 가정합니다.
빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.

입출력 예시
let output = firstCharacter('hello world');
console.log(output); // --> "hw"

output = firstCharacter(
  'The community at Code States might be the biggest asset'
);
console.log(output); // --> "TcaCSmbtba"






*/

// 다시 풀어보기
function firstCharacter(str) {
    if(str.length===0) return '';
    
    let word = str.split(' ');
    let newStr = '';
    
    word.forEach(el=> newStr += el[0])
    return newStr;    
}
console.log(firstCharacter('hello world'));
console.log(firstCharacter( 'The community at Code States might be the biggest asset'));




// // 현 풀이)
// function firstCharacter(str) {
//     if(str.length===0) return '';

//     let word = str.split(' ');
//     let newStr = '';
//     for(let idx=0; idx<word.length; idx++) {
//         newStr += word[idx][0];
//     }

//     return newStr;
// }
// console.log(firstCharacter('hello world'));
// console.log(firstCharacter( 'The community at Code States might be the biggest asset'));
// // console.log(firstCharacter('hello'));










// 이전 풀이) ----------------------------------------
// function firstCharacter(str) {
//     // TODO: 여기에 코드를 작성합니다.
//     // str을 먼저 split해주고, 각 첫 문자들을 새 배열에 담은 후 새로운 str에 각 요소를 +=해준다.
//     let arr = str.split(' ');
//     arr = arr.map((el) => el = el.substr(0,1));
//     let newStr = '';
//     arr.forEach(element => {
//       newStr += element;
//     });
//     return newStr;
//   }
  
