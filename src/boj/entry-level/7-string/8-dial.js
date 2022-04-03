/*
1. 단계별로 풀어보기 - 문자열 - 5622 - 다이얼

문제)
전화를 걸고 싶은 번호가 있다면, 숫자를 하나를 누른 다음에 금속 핀이 있는 곳 까지 시계방향으로 돌려야 한다. 
숫자를 하나 누르면 다이얼이 처음 위치로 돌아가고, 
다음 숫자를 누르려면 다이얼을 처음 위치에서 다시 돌려야 한다.

숫자 1을 걸려면 총 2초가 필요하다. 
1보다 큰 수를 거는데 걸리는 시간은 이보다 더 걸리며, 
한 칸 옆에 있는 숫자를 걸기 위해선 1초씩 더 걸린다.

상근이의 할머니는 전화 번호를 각 숫자에 해당하는 문자로 외운다. 
즉, 어떤 단어를 걸 때, 각 알파벳에 해당하는 숫자를 걸면 된다. 
예를 들어, UNUCIC는 868242와 같다.

할머니가 외운 단어가 주어졌을 때, 
이 전화를 걸기 위해서 필요한 최소 시간을 구하는 프로그램을 작성하시오.


입력)
첫째 줄에 알파벳 대문자로 이루어진 단어가 주어진다. 
단어의 길이는 2보다 크거나 같고, 15보다 작거나 같다.

출력)
첫째 줄에 다이얼을 걸기 위해서 필요한 최소 시간을 출력한다.
-------------------------------------------------------------------------
입력 예제1)
WA
출력 예제1)
13

입력 예제1)
UNUCIC
출력 예제1)
36
-------------------------------------------------------------------------
*/

// 나의 풀이)
// const input = require('fs').readFileSync('/dev/stdin').toString().trim();
// const inputArr = input.split('');
// const dial = ['','','','ABC','DEF','GHI','JKL','MNO','PQRS','TUV','WXYZ'];
// // console.log(dial.indexOf('ABc')); //-- -1
// // dial : dial 배열의 인덱스가 해당 알파벳에 대한 시간(time)
// // 868242

// // 1. dial의 문자열 중 inputArr의 문자가 포함되어있는지 확인해야함
// let time=0;
// for(let k=0; k<inputArr.length; k++) {
//     for(let i=3; i<dial.length; i++) {
//         // dial 요소 중 알파벳이 있는 인덱스만 반복
//         // 요소의 문자열 개수가 다르므로 유의
//         // ex) 'ABC', ... , 'WXYZ'
//         // for(let j=0; j<dial[i].length; j++) {
        
//         if(dial[i].split('').filter(el=>el===inputArr[k]).length===1) {
//             //-- dial[3].split('') : ['A', 'B', 'C']
//             //-- dial[3].split('').filter(el=>el===inputArr[j]) :
//             // console.log(inputArr[k]) 
//             // console.log('time',time);
//             // console.log('index',dial.indexOf(dial[i]))
//             time += dial.indexOf(dial[i]);
        
//         }
//     }
// }
    
// // console.log('result', time);
// console.log(time);

// 다른 풀이)
//-- 1. Array.prototype.includes() 사용
//-- 2. key(for문의 i) : value(대상)로 phone 선언 후, 
//--    확인하고자하는 문자열(input) 하나의 문자에 대하여 phone 객체의 key 를 확인해준다 
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
let phone = {
	2: "ABC",
	3: "DEF",
	4: "GHI",
	5: "JKL",
	6: "MNO",
	7: "PQRS",
	8: "TUV",
	9: "WXYZ",
};
let result = 0;

for (let i = 0; i < input.length; i++) {
	for (let j = 2; j <= 9; j++) {
		if (phone[j].includes(input[i])) {
			// phone : object
			// phone[j] : phone[2]: "ABC" ...
			// phone[j].includes(input[i]) (UNUCIC)
			//-- i=0, j=2 : phone[2].includes(input[0])--"ABC".includes('U')
			//		  j=3 : phone[3].includes(input[0])--"DEF".includes('U')
			//         :
			//        j=9 : phone[9].includes(input[0])--"WXYZ".includes('U') -- if(true)		
			result += j + 1;
			break;
		}
	}
}

console.log(result);




