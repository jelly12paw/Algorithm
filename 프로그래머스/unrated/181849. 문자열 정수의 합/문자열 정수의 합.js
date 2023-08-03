function solution(num_str) {
    return num_str.split('').map(n => Number(n)).reduce((acc, cur) => acc + cur);
}