/*
removeExtremes

문제
문자열을 요소로 갖는 배열을 입력받아 가장 짧은 문자열과 가장 긴 문자열을 제거한 배열을 리턴해야 합니다.

입력
인자 1 : arr
string 타입을 요소로 갖는 배열
arr[i].length는 20 이하

출력
배열을 리턴해야 합니다.

주의 사항
가장 짧은 문자열의 길이와 가장 긴 문자열의 길이가 같은 경우는 없습니다.
가장 짧은 문자열 또는 가장 긴 문자열이 다수일 경우, 나중에 위치한 문자열을 제거합니다.

입출력 예시
let output = removeExtremes(['a', 'b', 'c', 'def']);
console.log(output); // --> ['a', 'b']

output = removeExtremes(['where', 'is', 'the', 'longest', 'word']);
console.log(output); // --> ['where', 'the', 'word',]
*/
// 현 풀이
// 1. 먼저 arr를 돌면서 가장 길이가 작은 문자열, 큰 문자열을 찾는다.(다수여도)
// 2. 그리고 arr를 다시 돌면서 minChar, maxChar와 길이가 같은 것을
//    shortArr, longArr에 push 한다
// 3. shortArr, longArr의 마지막 배열의 문자를 받아 arr.indexOf로 찾고, 해당 문자를 배열에서 뺀다
// 4. return arr
// arr = ['where', 'is', 'the', 'longest', 'word']
// arr[0] = 'where'     --  minChar = 'where', maxChar = 'where'
// arr[1] = 'is'        --  minChar* = 'is', maxChar = 'where'
// arr[2] = 'the'       --  minChar = 'is', maxChar = 'where'
// arr[3] = 'longest'   --  minChar = 'is', maxChar* = 'longest'
// arr[4] = 'word'      --  minChar = 'is', maxChar* = 'longest'

function removeExtremes(arr) {
    // let shortArr = [];
    // let longArr = [];
    let minChar = arr[0];
    let maxChar = arr[0];
    let minCharIdx = 0;
    let maxCharIdx = 0;

    // minChar, maxChar 찾기
    for(let i=1; i<arr.length; i++) {
        if(arr[i].length <= minChar.length) {
            minChar = arr[i];
            minCharIdx = i;
        }
        if(arr[i].length >= maxChar.length) {
            maxChar = arr[i];
            maxCharIdx = i;
        }
    }

    let result = [];
    // for(let i=0; i<arr.length; i++) {
    //     if(i===arr.indexOf(arr[minCharIdx]) 
    //     || i===arr.indexOf(arr[maxCharIdx])) continue;
    //     result.push(arr[i]);
    // }
    for(let i=0; i<arr.length; i++) {
            if(i===minCharIdx 
            || i===maxCharIdx) continue;
            result.push(arr[i]);
        }
    // arr.splice(arr.lastIndexOf(minChar),1)
    // arr.splice(arr.lastIndexOf(maxChar),1)

    // 먼저 맨 처음의 최대최소값을 push 해줌 -- 어차피 마지막 값을 찾아서 빼주면되어서 안 해도됨
    // shortArr.push(minChar);
    // longArr.push(maxChar);

    // 다시 돌면서 최대 최소와 같은 길이의 요소를 찾아 빈 배열에 담음
    // for(let i=1; i<arr.length; i++) {
    //     if(arr[i].length === minChar.length) {
    //         shortArr.push(arr[i]);
    //     }
    //     if(arr[i].length === maxChar.length) {
    //         longArr.push(arr[i]);
    //     }
    // }
    // 각 최대 최소 요소의 마지막 값을 찾아 해당 값을 arr 의 요소에서 제거
    // const minidx = arr.lastIndexOf(shortArr[shortArr.length-1]);
    // arr.splice(minidx,1);

    // const maxidx = arr.lastIndexOf(longArr[longArr.length-1]);    
    // arr.splice(maxidx,1);
    

    return result;
    // return arr;
    // return console.log(arr.indexOf(shortArr[shortArr.length-1]));
}

const testarr = ['where', 'is', 'the', 'longest', 'word'];
const testarr2 = ['a', 'b', 'c', 'def'];

console.log(removeExtremes(testarr));
//-- is longest
console.log(removeExtremes(testarr2));
//-- a def

// 이전 풀이)------------------------
// function removeExtremes(arr) {
//     let shortestLen = 20;
//     let longestLen = 0;
//     let shortestIdx = 0;
//     let longestIdx = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].length >= longestLen) {
//         longestLen = arr[i].length;
//         longestIdx = i;
//       }
  
//       if (arr[i].length <= shortestLen) {
//         shortestLen = arr[i].length;
//         shortestIdx = i;
//       }
//     }
  
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (i !== shortestIdx && i !== longestIdx) {
//         result.push(arr[i]);
//       }
//     }
  
//     return result;
//   }