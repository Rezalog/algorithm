/*
1. 단계별로 풀어보기 - 기본수학 1 - 2292 - 벌집

문제)
위의 그림과 같이 육각형으로 이루어진 벌집이 있다. 
그림에서 보는 바와 같이 중앙의 방 1부터 시작해서 
이웃하는 방에 돌아가면서 1씩 증가하는 번호를 주소로 매길 수 있다. 

숫자 N이 주어졌을 때, 벌집의 중앙 1에서 N번 방까지 최소 개수의 방을 지나서 갈 때 
몇 개의 방을 지나가는지(시작과 끝을 포함하여)를 계산하는 프로그램을 작성하시오. 
예를 들면, 13까지는 3개, 58까지는 5개를 지난다.


입력)
첫째 줄에 N(1 ≤ N ≤ 1,000,000,000)이 주어진다.


출력)
입력으로 주어진 방까지 최소 개수의 방을 지나서 갈 때 몇 개의 방을 지나는지 출력한다.

-------------------------------------------------------------------------
입력 예제1)
13
출력 예제1)
3
-------------------------------------------------------------------------
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = +input;

/*

    아래
    1 2 9 22 41 66
     1 7 13 19 25
    8시
    1 3 11 25 45
     2 8 14 20
    10시
    1 4 13 28 49
     3 9 15 21
    위
    1 5 15 31 53
     4 10 16 22
    2시방향
    1 6 17 34 57
     5 11 17 23
    4시
    1 7 19 37 61
     6 12 16 24

    1번째줄 : 1
    2번째줄 : 2 3 4 5 6 7 : 6
    3번째줄 : 8 9 10 11 12 13 14 15 16 17 18 19 : 12
    4번째줄 : 20 21 22 ... 37 : 18
    5번째줄 : 38 ... 62 : 24
    6번째줄 : 62...(70).. : 36
    
*/
