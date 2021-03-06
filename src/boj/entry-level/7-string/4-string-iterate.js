/*
1. 단계별로 풀어보기 - 문자열 - 2675 - 문자열 반복

문제)
문자열 S를 입력받은 후에, 
각 문자를 R번 반복해 새 문자열 P를 만든 후 출력하는 프로그램을 작성하시오. 
즉, 첫 번째 문자를 R번 반복하고, 두 번째 문자를 R번 반복하는 식으로 P를 만들면 된다. 
S에는 QR Code "alphanumeric" 문자만 들어있다.

QR Code "alphanumeric" 문자는 
0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ\$%*+-./: 이다.


입력)
첫째 줄에 테스트 케이스의 개수 T(1 ≤ T ≤ 1,000)가 주어진다. 
각 테스트 케이스는 반복 횟수 R(1 ≤ R ≤ 8), 문자열 S가 공백으로 구분되어 주어진다. 
S의 길이는 적어도 1이며, 20글자를 넘지 않는다. 


출력)
각 테스트 케이스에 대해 P를 출력한다.

-------------------------------------------------------------------------
입력 예제1)
2
3 ABC
5 /HTP

출력 예제1)
AAABBBCCC
/////HHHHHTTTTTPPPPP
-------------------------------------------------------------------------
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const T = +input[0];
let R = 0;
let S = '';

for(let i=1; i<=T; i++) {
    R = +input[i].split(' ')[0];
    S = input[i].split(' ')[1];

    // 테스트 케이스 i번째 마다 대상 문자열 S의 문자마다 R번 반복 출력
    let P = '';
    for(let j=0; j<S.length; j++) {// S의 0~S의 길이까지에 대하여
        for(let k=0; k<R; k++) {// 각 문자를 R 반복하여 담음
            P += S.charAt(j);
        }
    }
    console.log(P.trimEnd());
}

// 다른 방식)
// --repeat()
//-- shift() 메서드는 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환합니다. 이 메서드는 배열의 길이를 변하게 합니다.

// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// const num1 = input.shift();

// for (let i = 0; i < num1; i++) {
//     let answer = '';
    
//     const [num2, str] = input[i].split(" ");
    
//     for (let j = 0; j < str.length; j++) {
//         answer += str[j].repeat(num2);
//     }
    
//     console.log(answer);
// }