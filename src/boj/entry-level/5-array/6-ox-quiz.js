/*
1. 단계별로 풀어보기 - 1차원 배열 - 8958 - OX퀴즈

문제)
"OOXXOXXOOO"와 같은 OX퀴즈의 결과가 있다. 
O는 문제를 맞은 것이고, X는 문제를 틀린 것이다. 
문제를 맞은 경우 그 문제의 점수는 그 문제까지 연속된 O의 개수가 된다. 
예를 들어, 10번 문제의 점수는 3이 된다.

"OOXXOXXOOO"의 점수는 1+2+0+0+1+0+0+1+2+3 = 10점이다.

OX퀴즈의 결과가 주어졌을 때, 점수를 구하는 프로그램을 작성하시오.


입력)
첫째 줄에 테스트 케이스의 개수가 주어진다. 
각 테스트 케이스는 한 줄로 이루어져 있고, 
길이가 0보다 크고 80보다 작은 문자열이 주어진다. 
문자열은 O와 X만으로 이루어져 있다.

출력)
각 테스트 케이스마다 점수를 출력한다.
-------------------------------------------------------------------------
입력 예제1)
5
OOXXOXXOOO
OOXXOOXXOO
OXOXOXOXOXOXOX
OOOOOOOOOO
OOOOXOOOOXOOOOX

출력 예제1)
10
9
7
55
30
-------------------------------------------------------------------------
*/

// 나의 풀이)

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const count = +input[0];
// const quiz = [...input].splice(1);
// // console.log(quiz);
// // console.log(quiz[0].length)
// let newArr = [];

// for(let quizNum=0; quizNum<count; quizNum++) {
//     /*
//     quiz = [
//         'OOXXOXXOOO',
//         'OOXXOOXXOO',
//         'OXOXOXOXOXOXOX',
//         'OOOOOOOOOO',
//         'OOOOXOOOOXOOOOX'
//         ] 
//     첫번째 퀴즈 'OOXXOXXOOO'의 점수 계산
//     두번째 퀴즈 'OOXXOOXXOO'의 점수 계산 
//                 :
//     */
//     // 새로운 퀴즈 시작 시 sum 초기화
//     let sum = 0;
//     let cont = 0; //-- 연속될시 ++

//     for(let index=0; index<quiz[quizNum].length; index++) {
//         // 1. split 으로 newArr에 담음
//         // 2. O 면 sum에 +=1, 여기서 이전 index 도 
//         newArr = quiz[quizNum].split('');
//         if(newArr[0]==='O') {
//             sum++;
//             cont++;
//         }
//         for(let i=1; i<newArr.length; i++) {
//             if(newArr[i]==='O') {
//                 if(newArr[i-1]==='O') {
//                     sum += cont;
//                 }
//                 sum++;
//             } else {
//                 cont = 1;
//             }
            
//         }
//     }
//     console.log(sum);
// }

// 다른 풀이 1) -----------------------------------------------
// https://velog.io/@wandakim/boj-node.js-%EB%B0%B1%EC%A4%80-8958%EB%B2%88-OX%ED%80%B4%EC%A6%88javascript

// 1. 입력받은 케이스 수와 각 케이스를 차례로 배열로 담아서
// 2. 하나씩 가져와서
// 3. O이면 n++, X 이면 n=0 을 새로운 배열에 추가.
// 4. 완성된 배열의 모든 값을 더한다. : reduce
// 5. 더한 값을 출력
// 6. 이 과정을 모든 요소에 적용
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const caseNum = +input[0];
// for(i=1;i<=caseNum;i++){
//     let n = 1;
//     let arr = [];
//     input[i].split('').forEach((el) => {
//         if(el === 'O'){
//         arr.push(n);
//         n++;
//         } else {
//         n = 1;
//         }
//     })
//     let sum = arr.reduce((pre,cur) => {return pre+cur});
//     console.log(sum);
// }

// 다른 풀이 2) -----------------------------------------------
//-- 연속되면 크리티컬 증가! 아니면 초기화.
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const caseNum = +input[0];

for(i=1; i<=caseNum; i++) {
    let cri = 0;
    let sum = 0;
    input[i].split('').forEach(el=>{
        if(el==='O'){
            cri++;
            sum += cri;
        } else {
            cri=0;
        }
    })
    console.log(sum);
}