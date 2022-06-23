function solution(id_list, report, k) {

    // id_list : ["muzi", "frodo", "apeach", "neo"]	
    // report : ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]
    //-- 신고 건수
    // k : 정지 기준이 되는 신고 횟수 k, 해당 사용자가 정지되면 그 사용자를 신고했던 고발자에게 정지 결과메일 발생
    // result : id_list 의 배열순서에 따라 결과메일을 받은 횟수

    // 1. id_list 배열의 요소를 key 로 갖는 객체를 생성하여, 신고한 사람과 자신이 신고받은 횟수를 바인딩
    // 2. 객체를 돌며 k 번 이상인 key 의 list 를 새로운 배열에 담고, 정지 대상을 신고한 list를 받아옴
    // 3. 객체를 돌며 answer(result)를 id_list 배열 순서대로 count를 올림

    let obj = {};
    for(let i=0; i<id_list.length; i++) {
        obj[id_list[i]] = { report : [], reported : 0 }
        /* {
            muzi: { report: [], reported: 0 },
            frodo: { report: [], reported: 0 },
            apeach: { report: [], reported: 0 },
            neo: { report: [], reported: 0 }
            }
        */ 
    }

    for(let key in Object.keys(obj)) {
        for(let i=0; i<report.length; i++) {
            if(key===report[i].split(' ')[1]) {
                key["reported"]++;
            }
            if(key===report[i].split(' ')[0]) {
                key["report"].push(report.split(' ')[1]);
            }
        }
    }


    // for(let key in id_list) {
    //     if(report.split(' ')[0] === obj.key) {
    //         obj.key = report.split(' ')[1];
    //     } else { 
            
    //     }
        
    // }
    return obj;

    // let reportObj = {};
    // let reporter = '';
    // let reported = '';
    
    // report.map(el => {
    //     reporter = el.split(' ')[0];
    //     reported = el.split(' ')[1];
    //     reportObj.reporter = reported;
    // })
    // return reportObj;
}

console.log(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 1))