/*
1. 단계별로 풀어보기 - while - 1110 - 더하기 사이클

문제)
0보다 크거나 같고, 99보다 작거나 같은 정수가 주어질 때 다음과 같은 연산을 할 수 있다. 
먼저 주어진 수가 10보다 작다면 앞에 0을 붙여 두 자리 수로 만들고, 각 자리의 숫자를 더한다. 
그 다음, 주어진 수의 가장 오른쪽 자리 수와 앞에서 구한 합의 가장 오른쪽 자리 수를 이어 붙이면 새로운 수를 만들 수 있다. 

다음 예를 보자. 26부터 시작한다. 2+6 = 8이다. 새로운 수는 68이다. 
6+8 = 14이다. 새로운 수는 84이다. 8+4 = 12이다. 새로운 수는 42이다. 4+2 = 6이다. 새로운 수는 26이다.
위의 예는 4번만에 원래 수로 돌아올 수 있다. 따라서 26의 사이클의 길이는 4이다.

N이 주어졌을 때, N의 사이클의 길이를 구하는 프로그램을 작성하시오.
-------------------------------------------------------------------------
입력)
첫째 줄에 N이 주어진다. N은 0보다 크거나 같고, 99보다 작거나 같은 정수이다.

출력)
첫째 줄에 N의 사이클 길이를 출력한다.
-------------------------------------------------------------------------
입력 예제1)
26
출력 예제1)
4

입력 예제2)
55
출력 예제2)
3

입력 예제3)
1
출력 예제3)
60

입력 예제4)
0
출력 예제4)
1

입력 예제5)
71
출력 예제5)
12
-------------------------------------------------------------------------
*/

//         26       2       6
// 1. 처음 받은 수를 leftStr, rightStr로
//                  6                       8=(2+6)
// 2. newStr = rightStr + (parseInt(leftStr) + parseInt(rightStr)).toString()
// 3. newNum = parseInt(newStr) = 68
// 4. 다시 2부터 반복

// 내가 한 풀이)
//-- 실행이안됨..

// const firstNum = require('fs').readFileSync('/dev/stdin').toString().trim();

// function cycle(str) {
//     let leftStr = '';
//     let rightStr = '';

//     if(+str<10) {
//         str = '0' + str;
//     }
//     leftStr = str.split('')[0];
//     rightStr = str.split('')[1];
//     let newStr = rightStr + (parseInt(leftStr) + parseInt(rightStr)).toString();
//     return newStr;
// }
// let cycleCount = 0;
// let newNumStr = cycle(firstNum);

// if(firstNum===newNumStr) {
//     return console.log(cycleCount++);
// }

// while(true) {
//     newNumStr = cycle(newNumStr);
//     cycleCount++;
//     if(+firstNum===+newNumStr) { 
//         break;
//     }
// }

// console.log(cycleCount);

// 다른 풀이)
//-- 10으로 나눈 몫과 나머지를 이용해서 계산
//-- 처음에 입력받은 수와 사이클을 분리해서 생각했었는데, 그럴 필요가 없다
//-- while 문을 돌게 하기 위해 flag 개념을 사용하여 빠져나와야할때 if 절을 이용했다
//-- while에 N=N%10*10 + addN%10 에서 0을 입력받을때도 해결하였다..
//-- 즉 이런문제를 string 으로 해결하려하면 매우 복잡해짐을 인지하자

// const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim();
// let addN = 0
// let count = 0;
// let N = +input;
// let isNotSame = true; 
// while(isNotSame) {
//     addN = Math.floor(N/10) + N%10; 
//     N = N%10*10 + addN%10;
//     count++
//     if(N==input){
//         console.log(count);
//         isNotSame = false;
//     }
// }

// 이해하고 풀어본 풀이
const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim();
let num = +input;
let add = 0;
let count = 0;
let flag = true;

while(flag) {
    // num의 10의 자리의 숫자와 1의자리 숫자를 더한 값
    //-- num=26 -> add=2+6 = 8
    add = Math.floor(num/10) + num%10;

    // num의 1의자리를 10의자리로 두고, add 값을 1의 자리로 두어 서로 더한다 
    //-- num의 1의자리 : 6, add : 8
    //-- 새로운 num : 68
    num = num%10*10 + add%10;   
    
    // 이제 사이클이 한번 돌았으므로 count를 1 늘려준다
    count++;

    // 사이클이 돌고 난 뒤, 처음 입력 숫자와 같으면 count 를 출력하고 반복문을 빠져나온다.
    if(num==input) {
        console.log(count);
        flag = false;
    }
}

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();
// let addN = 0
// let count = 0;
// let N = +input;
// let isNotSame = true; 
// while(isNotSame) {
//     addN = Math.floor(N/10) + N%10; 
//     N = N%10*10 + addN%10;
//     count++
//     if(N==input){
//         console.log(count);
//         isNotSame = false;
//     }
// }