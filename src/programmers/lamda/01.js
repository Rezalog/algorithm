function solution(num) {
    // 1. num을 string 형태로 두고 두개의 경우의 수로 나눈다
    // ex) 3462 : 34 / 62, 235386 : 235 / 386

    let numArr1 = num.toString().split("").slice(0, String(num).length/2);
    let numArr2 = num.toString().split("").slice(String(num).length/2, String(num).length);

    // 2. 각 숫자를 곱한 값이 같은지 검증, 다르면 같게하는 값을 오른쪽 값부터 찾음(최소값이므로)
    // 일의자리에서 찾았다면 해당 값을 리턴, 없으면 십의 자리, ..
    let mulResult = numArr1.map(Number).reduce((prev,cur) => prev*cur, 1);
    // numArr2.map(Number)
    for(let i=numArr2.length; i>=0; i--) {

    }

}

// console.log(solution(3462));
// console.log(solution(235386));