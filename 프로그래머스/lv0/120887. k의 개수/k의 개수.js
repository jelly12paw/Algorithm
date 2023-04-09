function solution(i, j, k) {
    var answer = 0;
    for (let n = i; n <= j; n++) {
        for (m of n.toString().split("")) {
            if (m === k.toString()) answer++
        }
    }
    return answer;
}