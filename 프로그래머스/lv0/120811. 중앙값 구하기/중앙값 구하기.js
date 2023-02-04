function solution(array) {
    const len = array.length;
    const mid = parseInt(len / 2);
    array.sort((a, b) => a - b);
    var answer = array[mid];
    return answer;
}