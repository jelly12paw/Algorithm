function solution(n) {
    var answer = 1;
    while (answer < n) {
        if (n % answer === 1) {
            break
        } else {
            answer++
        }
    }
    return answer;
}