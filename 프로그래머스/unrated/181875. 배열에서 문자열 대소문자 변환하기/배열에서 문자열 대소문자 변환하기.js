function solution(strArr) {
    var answer = [];
    for (let i = 0; i < strArr.length; i++) {
        i % 2 ? answer.push(strArr[i].toUpperCase()) : answer.push(strArr[i].toLowerCase())
    }
    return answer;
}