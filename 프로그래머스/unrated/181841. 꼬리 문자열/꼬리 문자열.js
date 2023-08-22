function solution(str_list, ex) {
    return str_list.map(word => word.includes(ex) ? '' : word).join('');
}