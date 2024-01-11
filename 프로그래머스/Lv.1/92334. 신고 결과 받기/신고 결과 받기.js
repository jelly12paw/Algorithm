function solution(id_list, report, k) {
    let answer = [];

    report = [...new Set(report)];

    let report_obj = {}; 
    id_list.forEach((e) => {
        report_obj[e] = 0;
    });

    report.forEach((e) => {
        let [id, opponent] = e.split(' ');
        report_obj[opponent] += 1; 
    });


    let mail_obj = {};
    report.forEach((e) => {
        let [id, opponent] = e.split(' ');

        if (report_obj[opponent] >= k) {
            if (!mail_obj[id]) {
                mail_obj[id] = 0;
            }
            mail_obj[id] += 1;
        }
    });


    id_list.forEach((userID) => {
        answer.push(mail_obj[userID] || 0); 
    });

    return answer;
}