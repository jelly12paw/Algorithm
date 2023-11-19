function solution(s) {
    return s.length % 2 ? s[Math.round(s.length / 2) - 1] : s.slice(Math.round(s.length / 2) - 1, Math.round(s.length / 2) + 1);
}