/*
1. 단계별로 풀어보기 - 문자열 - 10809 - 알파벳 찾기

문제)
알파벳 소문자로만 이루어진 단어 S가 주어진다. 
각각의 알파벳에 대해서, 단어에 포함되어 있는 경우에는 처음 등장하는 위치를, 
포함되어 있지 않은 경우에는 -1을 출력하는 프로그램을 작성하시오.

입력)
첫째 줄에 단어 S가 주어진다. 
단어의 길이는 100을 넘지 않으며, 알파벳 소문자로만 이루어져 있다.


출력)
각각의 알파벳에 대해서, a가 처음 등장하는 위치, b가 처음 등장하는 위치, 
... z가 처음 등장하는 위치를 공백으로 구분해서 출력한다.

만약, 어떤 알파벳이 단어에 포함되어 있지 않다면 -1을 출력한다. 
단어의 첫 번째 글자는 0번째 위치이고, 두 번째 글자는 1번째 위치이다.


-------------------------------------------------------------------------
입력 예제1)
baekjoon

출력 예제1)
1 0 -1 -1 2 -1 -1 -1 -1 4 3 -1 -1 7 5 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1
-------------------------------------------------------------------------
*/

// 나의 풀이)
//-- String.fromCharcode(number);
//-- arr.indexOf(str) : str 이 있는 최초의 index 만 반환
//-- ref) https://velog.io/@dragoocho/%EB%B0%B1%EC%A4%80-10809%EB%B2%88-Node.js-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4

const alphabet = require('fs').readFileSync('/dev/stdin').toString().trim();
const alphabetArr = alphabet.split('');

// console.log(alphaArr);
// console.log(alphaArr.indexOf('o')); 
//-- indexOf 는 처음 나오는 대상 str의 index만 반환
let result = '';

function alphabetFind(str) {

    for(let i='a'.charCodeAt(0); i<='z'.charCodeAt(0); i++) {
        result += alphabetArr.indexOf(String.fromCharCode(i)) + ' '
    }
    return result.trimEnd();
}

console.log(alphabetFind(alphabet));