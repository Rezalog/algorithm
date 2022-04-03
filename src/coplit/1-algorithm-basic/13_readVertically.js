/*
13_readVertically
readVertically
문제
문자열을 요소로 갖는 배열을 입력받아 문자열을 세로로 읽었을 때의 문자열을 리턴해야 합니다.

입력
인자 1 : arr
string 타입을 요소로 갖는 배열
출력
string 타입을 리턴해야 합니다.
주의 사항
각 문자열의 길이는 다양합니다.
각 문자의 위치를 행, 열로 나타낼 경우, 비어있는 (행, 열)은 무시합니다.
입출력 예시
let input = [
  //
  'hello',
  'wolrd',
];
let output = readVertically(input);
console.log(output); // --> 'hweolllrod'

input = [
  //
  'hi',
  'wolrd',
];
output = readVertically(input);
console.log(output); // --> 'hwiolrd'
*/

function readVertically(arr) {
    // arr의 인덱스를 번갈아가면서 새로운 배열에 push
    let verStr = '';
    let maxLen = 0;

    // arr의 요소중 가장 긴 길이의 문자열의 길이를 구한다
    for(let i=0; i<arr.length; i++) {
        if(arr[i].length > maxLen) {
            maxLen = arr[i].length;
        }
    }

    // 
    for(let j=0; j<maxLen; j++) {
        for(let n=0; n<arr.length; n++) {
            // [0][0], [1][0] / [0][1], [1][1] / [0][2], [1][2] / ...
            // 다른 작은 길이의 문자열은 undefinded 이므로 continue
            if(arr[n][j]===undefined) continue;
            verStr += arr[n][j];
        }
    }
    return verStr;
}

let input = [
    'hi',
    'wolrd',
  ];
console.log(readVertically(input))






// prev)
// function readVertically(arr) {
//     let maxLeng = 0;
//     for (i = 0; i < arr.length; i++) {
//       if (arr[i].length > maxLeng) {
//         maxLeng = arr[i].length
//       }
//     }
//     let result = ''
//     for (let j = 0; j < maxLeng; j++) {
//       for (let n = 0; n < arr.length; n++) {
//         if (arr[n][j] === undefined) {
//           continue
//         } 
//         result = result + arr[n][j]
//       }
//     }
//       return result
//     }