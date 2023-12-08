function solution(food) {
    var answer = '';
    const new_ = food.map((f, i) => i > 0 ? parseInt(f / 2) : f)
    new_.forEach((f, i) => {
        if (i > 0) {
            for (j = 0; j < f; j++) {
                answer += i.toString()
            }
        }
    })
    return answer + '0' + [...answer].reverse().join('');
}