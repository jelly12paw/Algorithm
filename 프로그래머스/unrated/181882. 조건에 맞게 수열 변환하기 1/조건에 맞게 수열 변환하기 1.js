function solution(arr) {
    return arr.map(n => !(n % 2) && n >= 50 ? n / 2 : n % 2 && n < 50 ? n * 2 : n);
}