function solution(n) {
    var answer = 0;
    let fact = 1;
    for (let i = 1; i <= 10; i++) {
        fact *= i
        if (n === fact) answer = i
        else if (n > fact) answer = i
    }
    return answer;
}