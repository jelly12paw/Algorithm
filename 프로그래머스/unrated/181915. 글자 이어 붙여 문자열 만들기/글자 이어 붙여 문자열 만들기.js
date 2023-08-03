function solution(my_string, index_list) {
    var answer = '';
    index_list.map((n) => answer += my_string[n])
    return answer;
}