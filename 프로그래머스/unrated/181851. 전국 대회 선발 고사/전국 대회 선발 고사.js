function solution(rank, attendance) {
    var answer = 0;
    const students = rank.filter((item, idx) => attendance[idx]).sort((a, b) => a - b).slice(0, 3);
    const score = [10000, 100, 1]
    students.forEach((n, i) => answer += rank.indexOf(n) * score[i])
    return answer;
}