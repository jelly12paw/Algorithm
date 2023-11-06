function solution(n) {
    let answer = [];
    const new_n = n.toString().split('');
    for (i = new_n.length - 1; i > -1; i--) {
        answer.push(+new_n[i])
    }
    
    return answer
}