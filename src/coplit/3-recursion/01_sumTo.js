

// 22/4/5
function sumTo(num) {
    // TODO: 여기에 코드를 작성합니다.
    // 별도의 최적화 기법(memoization)은 금지됩니다.
    if(num<=1) return num;

    return num + sumTo(num-1)


    // sumTo(10) -- num=10
    // : 1 + 2 + 3 + ... + 9 + 10
    // : sumTo(9) + 10
    // : sumTo(8) + 9 + 10
    // : 9 + sumTo(9-1) + 10
    // : 
    // : recur : sumTo(num) => sumTo(num-1) + num
    // : base : num >= 1(num>0)
}
  

// prev)
// function sumTo(num) {
//     // TODO: 여기에 코드를 작성합니다.
//     // 별도의 최적화 기법(memoization)은 금지됩니다.
//     if(num===0) { 
//       return 0;
//     }
//     return sumTo(num-1) + num;
//   }
  