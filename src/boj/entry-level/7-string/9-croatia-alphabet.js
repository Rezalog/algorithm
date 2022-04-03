/*
1. 단계별로 풀어보기 - 문자열 - 2941 - 크로아티아 알파벳

문제)
예전에는 운영체제에서 크로아티아 알파벳을 입력할 수가 없었다. 
따라서, 다음과 같이 크로아티아 알파벳을 변경해서 입력했다.

크로아티아 알파벳	변경
č	            c=
ć	            c-
dž	            dz=
đ       	    d-
lj	            lj
nj	            nj
š	            s=
ž	            z=

예를 들어, ljes=njak은 크로아티아 알파벳 6개(lj, e, š, nj, a, k)로 이루어져 있다. 
단어가 주어졌을 때, 몇 개의 크로아티아 알파벳으로 이루어져 있는지 출력한다.

dž는 무조건 하나의 알파벳으로 쓰이고, d와 ž가 분리된 것으로 보지 않는다. 
lj와 nj도 마찬가지이다. 위 목록에 없는 알파벳은 한 글자씩 센다.

입력)
첫째 줄에 최대 100글자의 단어가 주어진다. 
알파벳 소문자와 '-', '='로만 이루어져 있다.

단어는 크로아티아 알파벳으로 이루어져 있다. 
문제 설명의 표에 나와있는 알파벳은 변경된 형태로 입력된다.

출력)
입력으로 주어진 단어가 몇 개의 크로아티아 알파벳으로 이루어져 있는지 출력한다.
-------------------------------------------------------------------------
입력 예제1)
ljes=njak
출력 예제1)
6

입력 예제1)
ddz=z=
출력 예제1)
3

입력 예제1)
nljj
출력 예제1)
3

입력 예제1)
c=c=
출력 예제1)
2

입력 예제1)
dz=ak
출력 예제1)
3
-------------------------------------------------------------------------
*/

// 첫 풀이
//-- 오답.. 반복문 탈출때문에 머리아프다.
// let input = require('fs').readFileSync('/dev/stdin').toString().trim();
// const croatian = {0:'c=', 1:'c-', 2:'dz=', 3:'d-', 4:'lj', 5:'nj', 6:'s=', 7:'z='};
// const n = input.length;

// // input : ljes=njak : lj, e, s=, nj, a, k (9->6)
// // 1. croatian에 존재하면 해당 단어에 공백을 더해줌
// // 2. split(' ') 구분한 배열의 길이를 출력(아무것도 입력안했을때 고려해야)
// let i=0;
// while(i<n) {
//     if(input.includes(croatian[i])) {
//         // croatian[0].includes(ljes=njak)
//         input = input.replace(croatian[i], '1');
//         // console.log(i)
//         // console.log(input)
//     }
//     i++;
// }
// console.log(input.length);

// 다른 풀이
//-- 이런 문자열을 뽑아내거나 대체하는 경우는 정규식을 쓰는 것이 낫다고한다..

const input = require('fs').readFileSync('/dev/stdin').toString().trim()
let word = input;
const regex = [/lj/g, /c=/g, /c-/g, /dz=/g, /d-/g, /nj/g, /s=/g, /z=/g];

regex.map(ele => word = word.replace(ele, "1"));
console.log(word.length);
// console.log(typeof regex[0]); //--object