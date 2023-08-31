function solution(myString) {
    var answer = [];
    myString.split('x').forEach(n => answer.push(n.length))
    return answer;
}