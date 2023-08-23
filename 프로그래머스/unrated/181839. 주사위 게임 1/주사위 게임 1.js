function solution(a, b) {
    var answer = 0;
    if (a%2 && b%2) {
        answer = a*a + b*b
    } else if (a%2 || b%2) {
        answer = 2 * (a + b)
    } else {
        answer = Math.abs(a-b)
    }
    return answer;
}