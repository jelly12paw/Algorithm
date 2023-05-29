function solution(babbling) {
    let regex = /aya|ye|woo|ma/g;
    let answer = 0;
    for (i in babbling) {
        let test = babbling[i].replace(regex, "");
        if (test === "") {
            answer += 1;
        }
    }
    return answer;
}