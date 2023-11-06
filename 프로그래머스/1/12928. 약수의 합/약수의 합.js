function solution(n) {
    var answer = 0;
    let nums = n;
    for (i = nums; i > 0; i--) {
        if (n % i === 0) answer += i
    }
    
    return answer;
}