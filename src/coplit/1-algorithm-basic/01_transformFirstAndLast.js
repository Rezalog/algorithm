/*

transformFirstAndLast

문제)

배열을 입력받아 차례대로 
배열의 첫 요소와 마지막 요소를 키와 값으로 하는 객체를 리턴해야 합니다.

입력)

인자 1 : arr
- string 타입을 요소로 갖는 배열

출력)
- 객체를 리턴해야 합니다.

주의사항)
빈 배열을 입력받은 경우, 빈 객체를 리턴해야 합니다.
입력으로 받는 배열을 수정하지 않아야 합니다.

입출력 예시)
let arr = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
let output = transformFirstAndLast(arr);
console.log(output); // --> { Queen : 'Beyonce' }

arr = ['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey'];
output = transformFirstAndLast(arr);
console.log(output); // --> { Kevin : 'Spacey' }

*/

// 현재 풀이
function transformFirstAndLast(arr) {
    let obj = {};
    // obj = {arr[0] : arr[arr.length-1]};
    if(arr.length===0) return {};
    
    // obj.arr[0] = arr[arr.length-1];
    //-- TypeError: Cannot set properties of undefined (setting '0')
    // arr[0]라는 변수나 key가 존재하지 않으므로 불가(예측)

    // ref) JavaScript Object[‘key’] vs Object.key 차이
    // https://medium.com/sjk5766/javascript-object-key-vs-object-key-%EC%B0%A8%EC%9D%B4-3c21eb49b763
    
    // 제일 큰 차이는 property를 변수로 접근 가능하느냐
    // [] 표현은 변수로 접근 가능하지만 . 표현은 바로 객체의 속성에 접근합니다. 아래를 보면 이해가 갈겁니다.
    /*
        var a = { b : 1, c : 2 }
        var b = ‘c’
        console.log(a[b] + ‘ vs ‘ + a.b) // 2 vs 1 
    */

    obj[arr[0]] = arr[arr.length-1];

    return obj;
}
console.log(transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']));









// 이전 풀이)

// function transformFirstAndLast(arr) {
//     // TODO: 여기에 코드를 작성합니다.
  
//     if(arr.length===0) return {};
    
//     let firstEl = arr[0];
//     let lastEl = arr[arr.length-1];
//     let obj = {};
  
//     obj[firstEl] = lastEl;
  
//     return obj;
//   }
  




