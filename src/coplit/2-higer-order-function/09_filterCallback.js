/*
09_filterCallback
filterCallback
문제
함수와 배열을 입력받아 배열의 각 요소에 함수를 적용했을 때 그 결과가 참인 요소만을 갖는 새로운 배열을 리턴해야 합니다.

입력
인자 1 : func
number 타입을 입력받아 boolean 타입을 리턴하는 함수
인자 2 : arr
number 타입을 요소로 갖는 배열
arr[i]는 0 이상의 정수
출력
배열을 리턴해야 합니다.
주의 사항
반복문(for)문을 사용해야 합니다.
arr.filter 사용은 금지됩니다.
빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.
입출력 예시
function isOdd(num) {
  return num % 2 === 1;
}

function isEven(num) {
  return !isOdd(num);
}

let output = filterCallback(isOdd, [1, 2, 3, 4]);
console.log(output); // --> [1, 3]

output = filterCallback(isEven, [1, 2, 3, 4]);
console.log(output); // --> [2, 4]
*/



// 22/4/3

function filterCallback(func, arr) {
    if(arr.length===0) return [];
    
    let newArr = [];

    for(el of arr) {
        if(func(el)) newArr.push(el)
    }
    
    return newArr;
}





// prev)

// function filterCallback(func, arr) {
//     // TODO: 여기에 코드를 작성합니다.
//     // 참인 요소만 갖는 새 배열 리턴
//     // 참인 요소를 판별하는 func
//     // 새 배열 선언 및 push
//     let resultArr = [];
//     for(let element of arr) {
//       if(func(element)) {
//         resultArr.push(element)
//       }
//     }
//      return resultArr;
//   }
  