function solution(n) {
    return Array(n).fill('수').map((i, idx) => idx % 2 ? '박' : i).join('');
}