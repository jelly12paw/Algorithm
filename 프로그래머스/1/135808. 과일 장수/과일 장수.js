function solution(k, m, score) {
    return score.length > m ? score.sort().slice(score.length % m).map((n, i) => i % m ? 0 : n * m).reduce((a, c) => a + c) : 0
}