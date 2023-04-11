function solution(array, n) {
    var answer = 0;
    let num = 100;
    for (a of array) {
        if (Math.abs(n - a) < num) {num = Math.abs(n - a); answer = a;} else if (Math.abs(n - a) === num) {answer > a ? answer = a : answer;}
    }
    return answer;
}