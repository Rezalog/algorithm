

// 22/4/5
function sumOfArraysInArray(arr) {
  return arr.flat()
            .filter(el=>typeof el==='number')
            .reduce((prev,cur)=>prev+cur,0);
}

let output = sumOfArraysInArray([
    [1, 2],
    [undefined, 4, '5'],
    [9, 'hello'],
  ]);
  console.log(output);



// prev)

// function sumOfArraysInArray(arr) {
//     // TODO: 여기에 코드를 작성합니다.
//     // 1. 1차원 배열로 각 요소 붙임
//     // 2. 요소가 숫자인경우 더함 or 요소가 숫자인 배열만 남기고 더함
    
//     let numberArr = arr.flat(Infinity).filter((el) => typeof el =='number');
    
  
//    return numberArr.reduce(function (prev, cv) {
//        return prev+cv;
//     },0);
//   }
  