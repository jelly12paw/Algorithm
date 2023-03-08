function solution(n) {
    var answer = 0;
    let nn = n.toString()
    for (i = 0; i < nn.length; i++) {
        answer += Number(nn[i])
    }
    return answer;
}