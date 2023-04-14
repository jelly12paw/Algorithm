function solution(my_string) {
    return my_string.match(/[0-9]+/g) ? my_string.match(/[0-9]+/g).map(n => Number(n)).reduce((acc, cur) => acc + cur, 0) : 0;
}