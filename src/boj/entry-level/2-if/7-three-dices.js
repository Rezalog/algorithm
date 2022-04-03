/*
1. 단계별로 풀어보기 - if문 - 2480 - 주사위 세개

문제)
1에서부터 6까지의 눈을 가진 3개의 주사위를 던져서 다음과 같은 규칙에 따라 상금을 받는 게임이 있다. 

    1. 같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다. 
    2. 같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다. 
    3. 모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.  

예를 들어, 3개의 눈 3, 3, 6이 주어지면 상금은 1,000+3×100으로 계산되어 1,300원을 받게 된다.
또 3개의 눈이 2, 2, 2로 주어지면 10,000+2×1,000 으로 계산되어 12,000원을 받게 된다. 
3개의 눈이 6, 2, 5로 주어지면 그중 가장 큰 값이 6이므로 6×100으로 계산되어 600원을 상금으로 받게 된다.

3개 주사위의 나온 눈이 주어질 때, 상금을 계산하는 프로그램을 작성 하시오.
-------------------------------------------------------------------------
입력)
첫째 줄에 3개의 눈이 빈칸을 사이에 두고 각각 주어진다. 

출력)
첫째 줄에 게임의 상금을 출력 한다.
-------------------------------------------------------------------------
입력 예제1)
3 3 6
출력 예제1)
1300

입력 예제2)
2 2 2
출력 예제2)
12000

입력 예제3)
6 2 5
출력 예제3)
600
-------------------------------------------------------------------------
*/
// 오답 1)
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
// const dice1 = input[0];
// const dice2 = input[1];
// const dice3 = input[2];
// const max = Math.max(dice1, dice2, dice3);

// dice1===dice2 
// ? (dice3===dice1 ? console.log(10000+dice1*1000) : console.log(1000+dice1*100)) 
// : (dice2===dice3 ? console.log(1000+dice2*100) : console.log(max*100))


// 알게된 사실
// Math.max()함수는 입력값으로 받은 0개 이상의 숫자 중 가장 큰 숫자를 반환합니다.
// console.log(Math.max(1, 3, 2));
// // expected output: 3

// console.log(Math.max(-1, -3, -2));
// // expected output: -1

// const array1 = [1, 3, 2];

// console.log(Math.max(...array1));
// // expected output: 3

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/max

// 풀이 참고 : https://overcome-the-limits.tistory.com/243
// sort.pop()은 배열 가장 뒤에 있는 값을 빼는데, 그 값을 나타내는 용도로도 사용됨을 알았다.
// 근데 이 풀이 말고 뭔가 다른 방법이 있을 거 같은데..

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const dice1 = input[0];
const dice2 = input[1];
const dice3 = input[2];

if(dice1 === dice2 && dice2 === dice3 && dice3 === dice1) {
    console.log(10000 + dice1*1000);
}
if(dice1 !== dice2 || dice2 !== dice3 || dice3 !== dice1) {
    if(dice1 === dice2 || dice3 === dice1) {
        console.log(1000 + dice1*100)
    }
    if(dice2 === dice3) {
        console.log(1000 + dice2*100)
    }
}
if(dice1 !== dice2 && dice2 !== dice3 && dice3 !== dice1) {
    const sort = [dice1, dice2, dice3].sort();
    console.log(100*sort.pop());
}