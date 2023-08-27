function solution(my_string) {
    var answer = [];
    const strings = [...my_string];
    let word = '';
    for (i = 0; i < strings.length; i++) {
        if (strings[i] !== ' ') {
            word += strings[i]
        } else {
            answer.push(word)
            word = ''
        }
    }
    answer.push(word)
    return answer.filter(n => n !== '');
}