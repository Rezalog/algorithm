/*
03_powerOfTwo

문제)
수를 입력받아 2의 거듭제곱인지 여부를 리턴해야 합니다.

입력)
인자 1 : num
number 타입의 정수 (num >= 1)

출력)
boolean 타입을 리턴해야 합니다.

주의 사항)
- 반복문(while)문을 사용해야 합니다.
- 2의 0승은 1입니다.
- Number.isInteger, Math.log2, Math.log 사용은 금지됩니다.

입출력 예시)
let output1 = powerOfTwo(16);
console.log(output1); // true

let output2 = powerOfTwo(22);
console.log(output2); // false
*/

// 현재 풀이)

function powerOfTwo(num) {
    let result = false;
    if(num===0 || num===1) return true;
    let n = 1;
    let i = 1;
    while(n<num) {
        n = 2**i
        i++;

        if(n===num) {
            result = true;
        }
    }
    
    return result;
}

// console.log(powerOfTwo(16));
// console.log(powerOfTwo(22));
// console.log(powerOfTwo(2));
// console.log(powerOfTwo(0));


// 이전 풀이) -------------------------------------------------
// function powerOfTwo(num) {
//     // TODO: 여기에 코드를 작성합니다.
//     if(num===1 || num===2) {
//       return true;
//     }
//     let accOfTwo = 1;
  
//     while(num > 2 && accOfTwo<num) {
//       // 
//       // accOfTwo 에 2를 곱해주면서 num 이랑 같을때 true, num보다 accOfTwo가 커지면 false
//       accOfTwo *= 2;
  
//       if(accOfTwo>num) {
//         return false;
//       } else if(accOfTwo===num) {
//         return true;
//       }
//     }
//   }
  