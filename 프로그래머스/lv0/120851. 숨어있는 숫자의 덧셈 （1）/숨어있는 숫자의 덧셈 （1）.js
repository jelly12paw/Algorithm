function solution(my_string) {
    var answer = 0;
    let numbers = '1234567890';
    for (s of my_string) {
        for (n of numbers) {
            if (n === s) {
                answer += Number(s)
            }
        }
    }
    return answer;
}