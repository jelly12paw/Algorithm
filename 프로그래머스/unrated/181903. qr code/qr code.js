function solution(q, r, code) {
    var answer = '';
    return [...code].filter((n, i) => i % q === r).join('');
}