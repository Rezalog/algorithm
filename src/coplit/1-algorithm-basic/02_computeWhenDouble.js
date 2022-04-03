/*

computeWhenDouble

문제)
연이율을 입력받아 원금이 2배 이상이 될 때까지 걸리는 시간(년)을 리턴해야 합니다.


입력)
인자 1 : interestRate
- number 타입의 연이율 (%)


출력)
- number 타입을 리턴해야 합니다.

주의사항)

입출력 예시)
let output = computeWhenDouble(7);
console.log(output); // --> 11

output = computeWhenDouble(10);
console.log(output); // --> 8

*/

function computeWhenDouble(interestRate) {
    
    // 원금 * (이율 * 연수) >= 2 * 원금
    // return 연수

    // let a;
    const percent = (100+interestRate)/100; // 1+0.07 = 1.07
    let year = 0;
    let money = 1;

    // money * (interestRate * year) >= 2 * money
    // money는 양변에 있으므로 생략가능
    // year = 1
    // : money = money * percent(1.07)
    // year = 2
    // : money = money * percent(1.07) * percent(1.07)
    //    :
    
    while(money < 2) {
        money *= percent;
        year++;
    }
    
    return year;    
}
console.log(computeWhenDouble(7));












// 이전 풀이)-------------------------------------------------------------

// function computeWhenDouble(interestRate) {
//     // TODO: 여기에 코드를 작성합니다.
//     // 7 -> 7% -> a * 1.07 >= 2a 
//     // (100+interestRate)/100 * ... >= 2 -- percent가 곱해질때마다 year++;
//     // percent*...*percent >= 2
  
//     let percent = (100+interestRate) / 100;
//     let money = 1;  // 원금
//     let year = 0;
//     while(money < 2) {
//       money = money * percent;
//       year++;
//     }
//     return year;
//   }
  