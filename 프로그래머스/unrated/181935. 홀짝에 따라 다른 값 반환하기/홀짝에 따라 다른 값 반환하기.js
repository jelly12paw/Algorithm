function solution(n) {
    var answer = 0;
    for (i = 1; i <= n; i++) {
        if (n%2) {
            if (i%2) {
                answer += i
            }
        } else {
            if (i%2 === 0) {
                answer += i**2
            }
        }
    }
    return answer;
}