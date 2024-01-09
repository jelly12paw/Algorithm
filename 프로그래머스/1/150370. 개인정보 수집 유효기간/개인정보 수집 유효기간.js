function solution(today, terms, privacies) {
    var answer = [];

    privacies.forEach((e, i)=> {
        let privacies_split = e.split(' ')

        terms.forEach(e => {
            let terms_split = e.split(' ');

            if(terms_split[0] == privacies_split[1]) {
                 
                let modified_date = dateCalculator(privacies_split[0], terms_split[1])

                let modify_compare = new Date(modified_date);
                let today_compare = new Date(today);
                modify_compare.setDate(modify_compare.getDate() + 1);                 today_compare.setDate(today_compare.getDate() + 1); 
                if (today_compare > modify_compare) {
                    answer.push(i+1)
                }
            }
        })
    })

    return answer;
}


function dateCalculator(privacy, term) { 
    let split_privacy;
    let year = 0;
    let month = 0;
    let day = 0;
    let term_day = 28 * term; 
    let result = '';


    split_privacy = privacy.split('.');

    year = Number(split_privacy[0]);
    month = Number(split_privacy[1]);
    day = Number(split_privacy[2]);

    let count = 1;
    while(term_day > count){
        day += 1;
        if(day == 29) {
            day = 1;
            month += 1;

            if(month > 12) {
                year += 1;
                month = 1;
            }
        }
        count++;
    }


    year = String(year);
    month = String(month);
    day = String(day);

    if(month.length == 1) {
        month = '0' + month;
    }

    if(day.length == 1) {
        day = '0' + day;
    }

    result = year + '.' + month + '.' + day;

    return result
}