/**
 * 27_getLongestElement
getLongestElement
문제
문자열을 요소로 갖는 배열을 입력받아 배열에서 가장 긴 문자열을 리턴해야 합니다.

입력
인자 1 : arr
string 타입을 요소로 갖는 배열
출력
string 타입을 리턴해야 합니다.
주의 사항
반복문(for, while) 사용은 금지됩니다.
가장 긴 문자열이 중복이 될 경우, 앞 쪽에 있는 요소를 리턴해야 합니다.
빈 배열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
입출력 예시
let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'

output = getLongestElement(['one', 'two', 'wow']);
console.log(output); // --> 'one'
 */


// 22/4/5
function getLongestElement(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let temp = '';

    arr.reduce((prev,cur)=> {
        if(prev.length===cur.length) {
            temp = prev;
        } else if(prev.length>cur.length) {
            temp = prev;
        } else {
            temp = cur;
        }
    })
    return temp;
}
  


// prev)

// function getLongestElement(arr) {
//     // TODO: 여기에 코드를 작성합니다.
    
//     // 1. 가장 긴 문자열 리턴
//     // 2. 가장 긴 문자열이 중복이 될 경우, 앞 쪽에 있는 요소를 리턴해야 합니다.
//     // 3. 빈 배열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
    
//     // arr.reduce(prev, cv)
//     // 
//     if(arr.length===0) {
//       return '';
//     }

//     return arr.reduce(function (prev, cv){
//         let temp = '';
//         if (prev.length === cv.length) {
//             return temp = prev;
//         } else if (prev.length > cv.length) {
//             return temp = prev;
//         } else {
//             return temp = cv;
//         }
//     }, 0)
//   } 
  