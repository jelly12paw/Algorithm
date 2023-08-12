function solution(arr) {
    const answer = []
    arr.map(n => {for (i = 1; i <= n; i++) {answer.push(n)}})
    return answer;
}