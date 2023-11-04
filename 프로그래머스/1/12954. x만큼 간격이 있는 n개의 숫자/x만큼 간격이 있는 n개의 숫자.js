function solution(x, n) {
    return new Array(n).fill(x).map((num, idx) => num + (idx * x))
}