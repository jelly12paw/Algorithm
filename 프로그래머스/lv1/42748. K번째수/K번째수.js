function solution(array, commands) {
    var answer = [];
    commands.map((i) => {
        const nums = array.slice(i[0] - 1, i[1]).sort((a, b) => a - b);
        answer.push(nums[i[2] - 1])
    })
    return answer;
}