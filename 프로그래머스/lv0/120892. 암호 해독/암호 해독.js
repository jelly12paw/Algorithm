function solution(cipher, code) {
    var answer = '';
    for (i = 1; i <= parseInt(cipher.length / code); i++) {
        answer += cipher[i*code-1]
    }
    return answer;
}