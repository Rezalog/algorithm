/*
1. 단계별로 풀어보기 - 입출력과 사칙연산 - 1000 - A+B

문제)
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
-------------------------------------------------------------------------
입력)
첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

입력 예제)
1 2

출력)
첫째 줄에 A+B를 출력한다.

출력 예제)
3
-------------------------------------------------------------------------
*/

// 공백을 기준으로 한 줄의 입력값을 받을때 배열 input의 인덱스에 담는다. 
let input = require('fs').readFileSync("/dev/stdin").toString().trim().split(' ');
let a = parseInt(input[0]);
let b = parseInt(input[1]);

console.log(a+b);


/*
-------------------------------------------------------------------------
- 알게된 사실
1. node.js 에서 사용자의 입력값을 받아야할 때
    ref) https://tesseractjh.tistory.com/m/39

2. 입력값을 받는 유형에 따라 작성해 주어야함.

3. fs모듈로 stdin을 로드
fs 모듈을 이용하여 표준입력(stdin) 파일을 동기적으로 불러오는 방법입니다. 
아래 소스는 표준입력을 String형으로 변환후 공백을 기준으로 잘라주었습니다. 
여러 줄로 입력된 데이터의 경우에는 split 부분을 \n으로 설정해주면 됩니다.

시스템에 따라 stdin의 경로가 다를수도 있기에 주의가 필요합니다. 
또한 콘솔로 출력하는 경우, 입력의 끝 EOF를 찾을 수 없어서 계속 대기 상태가 되는 문제가 있습니다. 
Mac, Linux의 경우 control + D를 통해 결과를 확인 할 수 있습니다.
    ref) https://lamarr.dev/javascript/node.js/2020/04/06/01.html

참고)
1. require("fs").readFileSync("/dev/stdin")의 반환값은 문자열이 아닌 Buffer 객체다. 
readFileSync의 인수로 인코딩을 지정해주지 않으면 Buffer 객체를 반환한다. 
따라서 문자열로 바꾸어주지 않으면 예기치 못한 오류가 날 수 있다. 
문자열로 바꾸기 위해서는 위의 코드처럼 toString() 메서드 또는 문자열 연결 연산을 통해 
Buffer 객체를 문자열로 바꾸거나, readFileSync의 두 번째 인수로 인코딩을 지정해주면 된다.

2. trim()을 쓰는 이유
일부 입력값의 마지막에 개행문자가 포함된 경우가 종종 있다. 
이런 경우 split("\n")할 경우 공백문자 하나를 더 갖는 배열을 반환한다. 
이를 방지하기 위해서 trim()을 사용한다.

ex)
const text = '가\n나\n다\n';
console.log(text.split('\n')); // ['가', '나', '다', '']
console.log(text.trim().split('\n')); // ['가', '나', '다']

---------------------------------------------------------------------------

// 1. 하나의 값을 입력받을 때
const input = require('fs').readFileSync('/dev/stdin').toString().trim();

// 2. 공백으로 구분된 한 줄의 값들을 입력받을 때
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

// 3. 여러 줄의 값들을 입력받을 때
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// 4. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄에 공백으로 구분된 n개의 값들을 입력받을 때
const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s+/);

// 5. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄부터 n개의 줄에 걸쳐 한 줄에 하나의 값을 입력받을 때
const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// 6. 하나의 값 또는 공백으로 구분된 여러 값들을 여러 줄에 걸쳐 뒤죽박죽 섞여서 입력받을 때
// ex) n 입력 - 공백으로 구분된 n개의 값 입력 - m 입력 - 여러 줄에 걸쳐 m개의 값 입력
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s+/);
const n = input[0];
const n_arr = input.slice(1, n+1);
const [m, ...m_arr] = input.slice(n+1);

// 2~6에서 입력받는 값들을 모두 String에서 Number로 바꾸려면 split()뒤에 .map(v => +v)를 추가



*/