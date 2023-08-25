function solution(names) {
    let answer = []
    for (i = 0; i < names.length; i += 5) {
        answer.push(names[i])
    }
    return answer;
}