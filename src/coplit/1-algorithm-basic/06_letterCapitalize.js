/*
letterCapitalize

문제
문자열을 입력받아 문자열을 구성하는 각 단어의 첫 글자가 대문자인 문자열을 리턴해야 합니다.

입력
인자 1 : str
string 타입의 공백이 있는 알파벳 문자열

출력
string 타입을 리턴해야 합니다.

주의 사항
단어는 공백으로 구분합니다.
연속된 공백이 존재할 수 있습니다.
빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.

입출력 예시
let output1 = letterCapitalize('hello world');
console.log(output1); // "Hello World"
let output2 = letterCapitalize('javascript  is sexy ');
console.log(output2); // "Javascript  Is Sexy "

*/

// 현 풀이)

function letterCapitalize(str) {
    if(str.length===0) return '';
    let arr = str.split(' ');
    let newArr = arr.map(el=>el==='' ? el : el=(el[0].toUpperCase())+el.substring(1));

    return newArr.join(' ');
}

console.log(letterCapitalize('javascript   is sexy '));
// console.log(letterCapitalize(' a'));

// console.log(('javascript   is sexy ').split(' ')[0][0]); --j
// console.log(('javascript   is sexy ').split(' ').map(el=>el===''?el:el=(el[0].toUpperCase())+el.substring(1)));








w


// 이전 풀이) --------------------------------
// function letterCapitalize(str) {
//     let arr = str.split(' ');
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].length > 0) {
//         arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
//       }
//     }
  
//     str = arr.join(' ');
//     return str;
     
//   }
//   // // console.log(letterCapitalize("hello world"));
//   //   // TODO: 여기에 코드를 작성합니다.
//   //   // 빈 배열 arr에 str.split으로 각 str 들을 담아
//   //   // arr의 첫 요소의 첫글자를 upperCase 해줌
//   //   // 담은 arr를 join으로 return 해준다.
  
//   //   if(str.length===0) return '';
  
//   //   let arr = [];
//   //   arr = str.split(' ');
  
//   //   // arr = ['hello', 'world']
//   //   for(let i=0; i<arr.length; i++) {
//   //     arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
//   //   }
//   //   str = arr.join(' ');
//   //   return str;