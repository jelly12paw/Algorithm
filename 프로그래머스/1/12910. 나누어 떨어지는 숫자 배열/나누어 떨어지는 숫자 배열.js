function solution(arr, divisor) {
    return arr.map((i) => !(i % divisor)).includes(true) ? arr.filter((i) => i % divisor === 0).sort((a, b) => a - b) : [-1];
}