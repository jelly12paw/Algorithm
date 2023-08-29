function solution(arr, delete_list) {
    var answer = [];
    arr.forEach(n => delete_list.includes(n) ? '' : answer.push(n))
    return answer;
}