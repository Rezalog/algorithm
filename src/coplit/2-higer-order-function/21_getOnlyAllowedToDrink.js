
/*
21_getOnlyAllowedToDrink
getOnlyAllowedToDrink
문제
개인 정보를 담고 있는 객체를 요소로 갖는 배열을 입력받아 18세 이상인 사람의 이름을 요소로 갖는 배열을 리턴해야 합니다.

입력
인자 1 : arr
객체를 요소로 갖는 배열
arr[i]는 'name', 'age' 속성을 갖는 객체
'age' 속성은 number 타입 (0 이상의 정수)
출력
string 타입을 요소로 갖는 배열을 리턴해야 합니다.
주의 사항
반복문(for, while) 사용은 금지됩니다.
빈 배열이 주어진 경우에는 빈 배열을 리턴해야 합니다.
입출력 예시
let output = getOnlyAllowedToDrink([
  { name: 'Harry', age: 15 },
  { name: 'Ron', age: 14 },
  { name: 'Hermione', age: 14 },
]);
console.log(output); // --> []

output = getOnlyAllowedToDrink([
  { name: 'Cho', age: 14 },
  { name: 'Dumbledore', age: 87 },
  { name: 'Snape', age: 53 },
  { name: 'Hagrid', age: 43 },
]);
console.log(output); // --> ['Dumbledore', 'Snape', 'Hargrid']

output = getOnlyAllowedToDrink([]);
console.log(output); // --> []
힌트
문제를 한 번에 해결하지 말고, 나누어 봅니다.
나이가 18세 이상인 사람들의 정보로만 구성된 배열을 입력받은 경우, 문제가 더 쉬워진다는 것에 주목합시다.
*/

// 22/4/5
function getOnlyAllowedToDrink(arr) {
    // 1. 18세 이상만 filter
    // 2. filteredArr.map => name 출력
    const over18Arr = arr.filter(el=>el.age>=18);
    return over18Arr.map(el=>el.name);
}


// // 22/4/5
// function getOnlyAllowedToDrink(arr) {
//     // TODO: 여기에 코드를 작성합니다.
//     let newArr = [];
//     arr.map(el=> {
//         if(el.age>=18) {
//             newArr.push(el.name);
//         }
//     });
//     return newArr;
// }

console.log(getOnlyAllowedToDrink([
    { name: 'Cho', age: 14 },
    { name: 'Dumbledore', age: 87 },
    { name: 'Snape', age: 53 },
    { name: 'Hagrid', age: 43 },
  ]))




// prev)
// function getOnlyAllowedToDrink(arr) {
//     // TODO: 여기에 코드를 작성합니다.
//     // 1. 객체의 요소가 18세 이상인지 판별
//     // 2. 이상이면 그 배열의 이름을 요소로
     

//     // arr.filter(el => el.age >= 18)
//     let filterArray = arr.filter(el => el.age>=18);

//     return filterArray.map(function (el) {
//         return el.name;
//     })
    
// }