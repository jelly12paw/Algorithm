function solution(order) {
    var answer = 0;
    order.toString().split("").map((n) => {
        if ( n === '3' ) answer ++;
        else if (n === '6') answer++;
        else if (n === '9') answer++;
    })
    return answer;
}