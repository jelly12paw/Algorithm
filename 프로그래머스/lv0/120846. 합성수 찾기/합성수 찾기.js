function solution(n) {
    var answer = 0;
    let num_cnt = 0;
    for (let i = 4; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) num_cnt++
        }
        if (num_cnt >= 3) answer++
        num_cnt = 0
    }
    return answer;
}