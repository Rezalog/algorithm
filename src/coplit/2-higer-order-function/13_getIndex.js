
/*
13_getIndex
getIndex
문제
정수를 요소로 갖는 배열과 정수(num)를 입력받아 num을 배열에 추가하고 정렬한다고 가정할 경우, num의 인덱스를 리턴해야 합니다.

입력
인자 1 : arr
number 타입을 요소로 갖는 배열
arr[i]는 0 이상의 정수
인자 2 : num
number 타입의 정수 (num >= 0)
출력
number 타입을 리턴해야 합니다.
주의 사항
반복문(for, while) 사용은 금지됩니다.
arr.sort, arr.indexOf 사용은 금지됩니다.
빈 배열을 입력받은 경우, 0을 리턴해야 합니다.
num은 arr의 어떤 요소와도 같지 않다고 가정합니다.
입출력 예시
let output = getIndex([5, 4, 1, 3], 2);
console.log(output); // --> 1

output = getIndex([10, 5, 1, 3], 13);
console.log(output); // --> 4
*/

// 22/4/3
function getIndex(arr, num) {
    if(arr.length===0) return 0;
    
    let newArr = [];
    
    // 1. num을 배열에 추가
    arr.push(num);

    // 2. arr 정렬
    //-- 반복문 사용 불가
    //-- filter를 재귀로 호출하여 해결
    let filteredArr = arr.filter(el=>el<num)

    // 3. num 의 index return
    // num보다 작은 요소들로 이루어진 배열의 길이 = 해당 num 의 index
    //-- 즉, 정렬할 필요 없음
    return filteredArr.length;
}

let input = [5,4,1,3]
console.log(getIndex(input, 2));


let input2 = [10,5,1,3]
console.log(getIndex(input2, 13));



// prev)

// function getIndex(arr, num) {
//     return arr.filter(function (el) {
//       return el < num;
//     }).length;
//     // num 보다 작은 요소들의 배열의 길이만큼 남아있고,
//     // 몇 번째로 큰 지가 해당 배열의 길이와 같음
//   }