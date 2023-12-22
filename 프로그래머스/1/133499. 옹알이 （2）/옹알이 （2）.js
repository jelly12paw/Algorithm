function solution(babbling) {
    let answer = 0;
    let pronunciation = ["aya", "ye", "woo", "ma"]

    for(let i=0; i<babbling.length; i++) {
        for(let j=0; j<pronunciation.length; j++) {
            if(babbling[i].includes(pronunciation[j].repeat(2))) {
                break;
            }
            babbling[i] = babbling[i].split(pronunciation[j]).join('!');
        }
    }

    answer = babbling.filter(e => {
        return /(^!+$)/.test(e)
    }).length;

    return answer;
}