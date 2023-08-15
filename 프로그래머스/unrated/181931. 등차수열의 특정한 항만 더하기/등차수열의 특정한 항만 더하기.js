function solution(a, d, included) {
    var answer = 0;
    let nums = []
    for (i = 0; i < included.length; i++) {
        nums.push(a + (i * d))
    }
    included.forEach((n, i) => n ? answer += nums[i] : 0)
    return answer;
}