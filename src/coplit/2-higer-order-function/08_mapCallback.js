/**
 * 08_mapCallback
mapCallback
문제
함수와 배열을 입력받아 배열의 각 요소에 함수가 적용된 새로운 배열을 리턴해야 합니다.

입력
인자 1 : func
number 타입을 입력받아 number 타입을 리턴하는 함수
인자 2 : arr
number 타입을 요소로 갖는 배열
arr[i]는 0 이상의 정수
출력
배열을 리턴해야 합니다.
주의 사항
반복문(for)문을 사용해야 합니다.
arr.map 사용은 금지됩니다.
빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.
입출력 예시
function square(num) {
  return Math.pow(num, 2);
}

function mul10(num) {
  return num * 10;
}

let output = mapCallback(square, [2, 4, 7]);
console.log(output); // --> [4, 16, 49]

output = mapCallback(mul10, [2, 4, 7]);
console.log(output); // --> [20, 40, 70]

output = mapCallback(square, []);
console.log(output); // --> []

*/

// ref code) 
//-- for .. of 사용
function mapCallback(func, arr) {
    let newArr = [];
    for(el of arr) {
        newArr.push(func(el));
    }
    return newArr;
}

// 22/4/3
//-- 통과
// function mapCallback(func, arr) {
//     // return arr.map(el=>func(el)); 
//     //-- map금지

//     for(let i=0; i<arr.length; i++) {
//         arr[i] = func(arr[i])    
//     }
//     return arr;
// }


// prev)

// function mapCallback(func, arr) {
//     // TODO: 여기에 코드를 작성합니다.
//     // arr의 각 요소가 func이 적용된 새로운 배열 리턴해야함
//     // arr.map 사용 금지
//     let resultArr = [];
//     // for(let i = 0; i<arr[i].length; i++) {
//     //   resultArr.push(func(arr[i]));
//     // }
//     for(let element of arr) {
//       resultArr.push(func(element));
//     }
//     return resultArr;
//   }
  