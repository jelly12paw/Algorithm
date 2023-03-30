function solution(array) {
    var answer = [];
    let num = 0;
    let idx = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] > num) {
            num = array[i]
            idx = i
        }
    } 
    answer.push(num)
    answer.push(idx)
    return answer;
}