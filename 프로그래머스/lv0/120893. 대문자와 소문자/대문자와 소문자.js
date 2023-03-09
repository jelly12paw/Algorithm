function solution(my_string) {
    var answer = '';
    let list_string = [...my_string];
    for (i = 0; i < list_string.length; i++) {
        if (list_string[i] === list_string[i].toUpperCase()) {
            answer += list_string[i].toLowerCase()
        } else {
            answer += list_string[i].toUpperCase()
        }
    }
    return answer;
}