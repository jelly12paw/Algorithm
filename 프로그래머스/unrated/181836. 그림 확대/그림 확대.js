function solution(picture, k) {
    var answer = [];
    const times_a = picture.map((i) => [...i].map((j) => Array(k).fill(j).join('')).join(''));
    const arr = times_a.map((i) => Array(k).fill(i));
    arr.forEach((i) => i.forEach((ii) => answer.push(ii)))
    return answer;
}