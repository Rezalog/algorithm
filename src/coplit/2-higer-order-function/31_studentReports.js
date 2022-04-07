/*

31_studentReports
studentReports
문제
학생의 정보가 담긴 객체를 요소로 갖는 배열을 입력받아 아래 조건에 맞게 변형된 배열을 리턴해야 합니다.

남학생들의 정보는 리턴하는 배열에서 제외합니다.
'grades' 속성값은 평균값(number 타입)으로 바꿉니다.
입력
인자 1 : students
객체를 요소로 갖는 배열
arr[i]는 'name', 'gender' 등의 속성을 갖는 객체
'grades' 속성은 number 타입을 요소로 갖는 배열
'grades' 속성이 빈 배열인 경우는 없다고 가정합니다.
출력
반복문(for, while) 사용은 금지됩니다.
배열을 리턴해야 합니다.
배열로 되어 있는 학생들의 성적을 number 타입의 평균값으로 변형해야 합니다.
주의 사항
'female'는 여학생, 'male'는 남학생입니다.
입출력 예시
let studentList = [
  {
    name: 'Anna',
    gender: 'female',
    grades: [4.5, 3.5, 4],
  },
  {
    name: 'Dennis',
    gender: 'male',
    country: 'Germany',
    grades: [5, 1.5, 4],
  },
  {
    name: 'Martha',
    gender: 'female',
    grades: [5, 4, 4, 3],
  },
  {
    name: 'Brock',
    gender: 'male',
    grades: [4, 3, 2],
  },
];

let output = studentReports(studentList);

console.log(output); // -->
[
  { name: 'Anna', gender: 'female', grades: 4 },
  { name: 'Martha', gender: 'female', grades: 4 },
];
힌트
문제를 한 번에 해결하지 말고, 나누어 봅니다.

*/


// 22/4/5
function studentReports(students) {
    // TODO: 여기에 코드를 작성합니다.

    // 1. 남학생들의 정보는 리턴하는 배열에서 제외합니다.
    const onlyFemale = students.filter(el=>el.gender==='female')
    // 2. 'grades' 속성값은 평균값(number 타입)으로 바꿉니다.
    return onlyFemale.map(el=> { 
        let sum = el.grades.reduce((prev,cur)=>prev+cur)
        let avg = sum / el.grades.length;
        el.grades = avg;
        return el;
    })

}


// prev)

// function studentReports(students) {
//     // TODO: 여기에 코드를 작성합니다.
  
//     // 1. students의 key(name, gender, grade)의 value에 접근하여
//     //    gender === 'female' 인 경우의 배열만 남김
//     // 2. grades의 배열에 접근, 요소를 reduce를 사용하여 평균값 return하여 
//     //    해당요소의 grades 값에 대입
//     let onlyFemale = students.filter((el) => (el.gender==='female') ? el : false);
    
//     return onlyFemale.map((el) => {
//       let sum = el.grades.reduce(function (prev,cv) {
//         return prev + cv;
//       }, 0)
//       el.grades = sum / el.grades.length;
//       return el;
//     })
//   }
  