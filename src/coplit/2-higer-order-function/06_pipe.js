/*
06_pipe
pipe
문제
함수들을 입력받아 함수들이 입력된 차례대로 결합된 새로운 함수를 리턴해야 합니다.

입력
인자 1 : func1
number 타입을 입력받아 number 타입을 리턴하는 함수
인자 2 : func2
number 타입을 입력받아 number 타입을 리턴하는 함수
인자 N : funcN
number 타입을 입력받아 임의의 타입을 리턴하는 함수
출력
함수를 리턴해야 합니다.
리턴되는 함수는 정수를 입력받아 func1, func2, ..., funcN의 순으로 적용합니다.
주의 사항
입력되는 함수들의 수는 1개 이상이라고 가정합니다.
함수가 아닌 입력은 존재하지 않는다고 가정합니다.
입력받은 함수들이 어떤 일을 하는지는 중요하지 않습니다.
입출력 예시
function square(num) {
  return num * num;
}

function add5(num) {
  return num + 5;
}

function mul3(num) {
  return num * 3;
}

function isOdd(num) {
  return num % 2 !== 0;
}

let output = pipe(add5, square);
console.log(output(4)); // --> 81

output = pipe(square, add5, mul3);
console.log(output(4)); // --> 63

output = pipe(square, mul3, add5, add5, isOdd);
console.log(output(4)); // --> false
힌트
자바스크립트 함수의 인자(arguments)에 대해서 검색해 봅니다. (javascript arguments object)
전개 문법, 연산자를 활용할 수도 있습니다. (mdn spread syntax, spread operator)
*/

// 22/4/3

function pipe(...funcArgs) {
    return function(num) {
        let result = num;
        for(let i=0; i<funcArgs.length; i++) {
            result = funcArgs[i](result);
        }
        return result;
    }
}






// function pipe(...funcArgs) {
//     // TODO: 여기에 코드를 작성합니다.
//     // 1. pipe 의 인자는 n개 받을 수 있다
//     // 2. 인자들은 함수이다.
//     // -- pipe(...funcArgs) 사용
  
//     // 3. 첫번째 인자의 리턴값을 다음인자의 인자로 받아 실행하고 이를 반복한다.
//     return function(num) {
//       // funcArgs의 인자로 들어갈 num을 pipe의 return값으로 지정
//       // 첫번째부터 n번째 함수를 순차적으로 실행해야하므로 funcArgs의 길이만큼 반복문을 돌려준다.
//       // 각 함수에 따른 리턴값을 담을 변수 result를 num 값으로 초기화
//       let result = num;
//       for(let i=0; i<funcArgs.length; i++) {
//         result = funcArgs[i](result);
//       }
//       // 반복문을 모두 돌린 뒤 맨마지막 함수의 result return
//       return result;
//     }
//   }