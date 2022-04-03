/*
1. 단계별로 풀어보기 - if문 - 14681 - 사분면 고르기

문제)
흔한 수학 문제 중 하나는 주어진 점이 어느 사분면에 속하는지 알아내는 것이다. 
사분면은 아래 그림처럼 1부터 4까지 번호를 갖는다. 
"Quadrant n"은 "제n사분면"이라는 뜻이다.

예를 들어, 좌표가 (12, 5)인 점 A는 x좌표와 y좌표가 모두 양수이므로 제1사분면에 속한다. 
점 B는 x좌표가 음수이고 y좌표가 양수이므로 제2사분면에 속한다.

점의 좌표를 입력받아 그 점이 어느 사분면에 속하는지 알아내는 프로그램을 작성하시오. 
단, x좌표와 y좌표는 모두 양수나 음수라고 가정한다.

-------------------------------------------------------------------------
입력)
첫 줄에는 정수 x가 주어진다. (−1000 ≤ x ≤ 1000; x ≠ 0) 다음 줄에는 정수 y가 주어진다. (−1000 ≤ y ≤ 1000; y ≠ 0)


출력)
점 (x, y)의 사분면 번호(1, 2, 3, 4 중 하나)를 출력한다.

-------------------------------------------------------------------------
입력 예제1)
12
5
출력 예제1)
1

입력 예제2)
9
-13
출력 예제2)
4
-------------------------------------------------------------------------
*/

// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let x = parseInt(input[0]);
// let y = parseInt(input[1]);

// if(x>0 && y>0) return console.log(1)
// else if(x<0 && y>0) return console.log(2)
// else if(x<0 && y<0) return console.log(3)
// else if(x>0 && y<0) return console.log(4)

// 런타임 에러..
// x>0? (y>0? console.log(1) : console.log(4)) : (y>0? console.log(2) : console.log(3))

const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})
let input = [];

rl.on('line', line=>input.push(line))
.on('close', ()=>{
    let a = Number(input[0]);
    let b = Number(input[1]);

    if(a>0) {
        b>0 ? console.log(1) : console.log(4)
    } else if(a<0) {
        b>0 ? console.log(2) : console.log(3) 
    }
    
    process.exit();
})

/*
여기서 fs.readFileSync에 dev/stdin을 항상 입력해왔는데, 여기서 dev/stdin을 입력하면 런타임에러가 나옵니다. 
그래서 이 부분을 0으로 표시해줬습니다.

출처: https://overcome-the-limits.tistory.com/323 [Plus Ultra] */