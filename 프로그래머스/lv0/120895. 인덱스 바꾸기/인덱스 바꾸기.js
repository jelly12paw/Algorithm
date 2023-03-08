function solution(my_string, num1, num2) {
    var answer = my_string.split('');
    [answer[num1], answer[num2]] = [my_string[num2], my_string[num1]]
    return answer.join('');
}