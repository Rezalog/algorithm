/*
12_filterOddLengthWords
filterOddLengthWords
문제
문자열을 요소로 갖는 배열을 입력받아 그 길이가 홀수인 요소만을 갖는 배열을 리턴해야 합니다.

입력
인자 1 : words
문자열을 요소로 갖는 배열
출력
길이가 홀수인 문자열을 요소로 갖는 배열을 리턴해야 합니다.
주의 사항
반복문(for, while) 사용은 금지됩니다.
arr.indexOf, arr.splice, arr.slice, arr.forEach 등의 사용은 금지됩니다.
반드시 arr.filter를 이용해서 풀어야 합니다.
빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.
입출력 예시
let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']
*/

// 22/4/3
function filterOddLengthWords(words) {
    return words.filter(el=>el.length%2===1);
}

// prev)
// function filterOddLengthWords(words) {
//     // TODO: 여기에 코드를 작성합니다.
//     // words = ['1','2','dt','dsdsd', ...]
//     // words.element.length = 2n+1 -- odds
//     return words.filter((el) => (el.length % 2 !== 0) ? true : false)
  
//   }
  