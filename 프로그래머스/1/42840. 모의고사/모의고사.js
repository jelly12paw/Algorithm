function solution(answers) {
    let mathHateMan1Score = 0;
    let mathHateMan2Score = 0;
    let mathHateMan3Score = 0;

    const mathHateMan1Pick = [1,2,3,4,5];
    const mathHateMan2Pick = [2,1,2,3,2,4,2,5];
    const mathHateMan3Pick = [3,3,1,1,2,2,4,4,5,5];

    let answer = [];

    mathHateMan1Score = answers.filter((answer, index) => answer === mathHateMan1Pick[index % mathHateMan1Pick.length]).length;

     mathHateMan2Score = answers.filter((answer, index) => answer === mathHateMan2Pick[index % mathHateMan2Pick.length]).length;

     mathHateMan3Score = answers.filter((answer, index) => answer === mathHateMan3Pick[index % mathHateMan3Pick.length]).length;

    const maxScore = Math.max(mathHateMan1Score, mathHateMan2Score, mathHateMan3Score);

    if (maxScore === mathHateMan1Score) {
        answer.push(1);
    }

    if (maxScore === mathHateMan2Score) {
        answer.push(2);
    }

    if (maxScore === mathHateMan3Score) {
        answer.push(3);
    }

    return answer;
}