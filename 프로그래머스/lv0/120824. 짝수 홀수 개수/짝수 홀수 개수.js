function solution(num_list) {
    let odd_num = 0;
    let even_num = 0;
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            even_num += 1
        } else {
            odd_num += 1
        }
    }
    var answer = [even_num, odd_num];
    return answer;
}