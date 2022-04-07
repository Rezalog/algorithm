/*
30_findShortestWord
findShortestWord
문제
배열을 입력받아 배열에서 가장 짧은 길이를 가진 문자열 요소를 리턴해야 합니다.

입력
인자 1 : arr
임의의 요소가 담긴 배열
출력
string 타입을 리턴해야 합니다.
주의 사항
반복문(for, while) 사용은 금지됩니다.
같은 길이의 요소가 있다면 배열의 앞쪽에 있는 요소를 리턴해야 합니다.
배열에는 문자열 외에 다른 요소들이 있을 수 있습니다.
빈 배열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
주어진 배열에 문자열이 없는 경우, 빈 문자열을 리턴해야 합니다.
입출력 예시
let output = findShortestWord([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
힌트
문제를 한 번에 해결하지 말고, 나누어 봅니다.
문자열로만 구성된 배열을 입력받은 경우, 문제가 더 쉬워진다는 것에 주목합시다.
*/

// 22/4/5
function findShortestWord(arr) {
    // TODO: 여기에 코드를 작성합니다.
    // if(arr.length===0) return ''
    let filtered = arr.filter(el=> typeof el==='string');
    if(filtered.length===0) return ''

    // return filtered;
    return filtered.reduce((prev,cur)=>((prev.length<=cur.length)? prev : cur));
}

console.log(findShortestWord([4, 'two', 2, 'three']));




// prev
// function findShortestWord(arr) {
//     // TODO: 여기에 코드를 작성합니다.
//     // arr = [4, 'two', 2, 'three'] -- 'two'
//     // 1. arr의 요소를 접근하여 문자열인지 검증(문자열이 하나도 없으면 빈 문자열)
//     //    arr.filter로 문자열로만 이루어지게 재구성
//     // 2. 새로운 String 배열 arr요소의 length를 비교후 가장 길이가 긴 문자열의 요소를 가져옴
    
//     // 1
//     let stringArr = arr.filter((el) => (typeof el === 'string') ? el : false);
//     if(stringArr.length === 0) {
//       return '';
//     }
    
//     // 2. stringArr.reduce(prev, currentValue)
//     // const initialValue = [];
//     // stringArr = ['a', 'bb', 'ccc', '', ...]
//     const reducer = (prev, cv) => (prev.length <= cv.length) ? prev : cv;
//     return stringArr.reduce(reducer);
    
//   }