/*
ABCheck

문제
문자열을 입력받아 문자열 내에 아래 중 하나가 존재하는지 여부를 리턴해야 합니다.

'a'로 시작해서 'b'로 끝나는 길이 5의 문자열
'b'로 시작해서 'a'로 끝나는 길이 5의 문자열

입력
인자 1 : str
string 타입의 알파벳 문자열

출력
boolean 타입을 리턴해야 합니다.

주의 사항
대소문자를 구분하지 않습니다.
공백도 한 글자로 취급합니다.
'a'와 'b'는 중복해서 등장할 수 있습니다.

입출력 예시
let output = ABCheck('lane Borrowed');
console.log(output); // --> true 
*/

// 다시) -------------------------
function ABCheck(str) {
    
    str = str.toLowerCase();
    // for(let i=0; i<str.length; i++) {
    //-- 이렇게 되면 str범위를 넘어서 str[i+4]가 undefined가 됨
    for(let i=4; i<str.length; i++) {

        if((str[i-4]==='a' && str[i]==='b')
        || (str[i-4]==='b' && str[i]==='a')) {
            return true;
        }        
    }
    return false;

}
console.log(ABCheck('lane Borrowed'));
console.log(ABCheck('LFOMF4zJPuQQNuofLuELseY046UZy6gV'));





// 현 )----------------------
//-- axxxaxxxb 의 경우 true가 반환되어야 하는데
//   a를 처음 찾고 말아버려서 실패
//   반복문 사용해야 할듯


// function ABCheck(str) { 
//     if(str.length===0) return false;
//     let substrA = '';
//     let substrB = '';
//     let idxA = 0;
//     let idxB = 0;
//     let lowstr = str.toLowerCase();
//     // str. contains, indexOf, matches
//     // ref) https://fruitdev.tistory.com/72 [과일가게 개발자]
    
//     // 1. 'a'로 시작해서 'b'로 끝나는 길이 5의 문자열
//     // str에서 a 문자가 존재하면 해당 a의 인덱스부터 substring(idx, idx+5).length===5
//     // && 마지막 문자 b
    
//     idxA = lowstr.indexOf('a');
//     substrA = lowstr.substring(idxA, idxA+5) 

//     // 2. 'b'로 시작해서 'a'로 끝나는 길이 5의 문자열
//     idxB = lowstr.indexOf('b');
//     substrB = lowstr.substring(idxB, idxB+5)

//     if((substrA[0]==='a' && substrA[4]==='b')
//         || substrB[0]==='b' && substrB[4]==='a') return true;
//     else return false;

// }
// console.log('dd  '.length); // 4
// console.log('abcde'.substring(0,4)); // abcd

// 이전 )------------------------
// function ABCheck(str) {
//     // code goes here
//     if(str === '') {
//      return false; 
//     }  
//     str = str.toLowerCase();
//     for(let i=4; i<str.length; i++) {
//       if((str[i] === 'a' && str[i-4] === 'b') || (str[i] === 'b' && str[i-4] === 'a')){
//          return true;
//       }
//     }
//     return false;
//   }
  