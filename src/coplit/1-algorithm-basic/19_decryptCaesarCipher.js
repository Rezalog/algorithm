/*
19_decryptCaesarCipher
decryptCaesarCipher
문제
암호화된 문자열과 암호화 키를 입력받아 복호화된 문자열을 리턴해야 합니다.
카이사르 암호(Caesar cipher)는 평문(plaintext)을 암호키 secret개만큼 (오른쪽으로) 평행이동시켜 암호화 합니다. 복호화는 암호화된 문자열을 원래의 평문으로 복원하는 것을 말합니다.

'hello'를 secret 3으로 암호화한 경우: 'khoor'
'codestates'를 secret 11로 암호화한 경우: 'nzopdelepd'
입력
인자 1 : str
string 타입의 알파벳 소문자 문자열
인자 2 : secret
number 타입의 암호화 키
출력
string 타입을 리턴해야 합니다.
주의 사항
빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
공백은 그대로 두어야 합니다.
입출력 예시
let output = decryptCaesarCipher('khoor', 3);
console.log(output); // --> hello

output = decryptCaesarCipher('zruog', 3);
console.log(output); // --> world
*/

// 22/4/3
// ref) ascii 코드 변환 
// : String.fromCharCode(ascii 숫자), String.charCodeAt(문자열자리수) 
// https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=diceworld&logNo=220175224345
function decryptCaesarCipher(str, secret) {

  // str 하나하나를 아스키코드화 하여 secret만큼 더한 뒤 새로운 문자열 리턴
  let newStr = '';
  let newArr = [];
  // let newArr = str.split('').map(el=> el.charCodeAt(0)-secret);

  for(let i=0; i<str.length; i++) {
    if(str[i]===' ') {
      newStr += ' ';
    } else if(str.charCodeAt(i)-secret<97) {
      newStr += String.fromCharCode(str.charCodeAt(i)+26-secret);
    } else {
      newStr += String.fromCharCode(str.charCodeAt(i)-secret);
    }
  }
  // newStr = String.fromCharCode(newArr.join(','));
  // newStr = newArr.map(el=>String.fromCharCode(el)).join('');
  return newStr;
}

console.log(decryptCaesarCipher('khoor zruog',3));
console.log(decryptCaesarCipher('nzopdelepd',11));
console.log(decryptCaesarCipher('zruog',3));

// prev)
// function decryptCaesarCipher(str, secret) {
//     // TODO: 여기에 코드를 작성합니다.
//      const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//     let idx = 0;
    
//     let newArr = '';
//     for(let i = 0; i < str.length; i++){
//       if(str[i] === ' '){
//         newArr += ' ';
//       }else{
//         idx = alphabet.indexOf(str[i]);
//         if(idx-secret >= 0){          //1-2 = -1
//          newArr += alphabet[idx-secret];
//         }else{
//           newArr += alphabet[26+(idx-secret)];
//         }
//       }
//     }
//     return newArr;
    
//   }
  