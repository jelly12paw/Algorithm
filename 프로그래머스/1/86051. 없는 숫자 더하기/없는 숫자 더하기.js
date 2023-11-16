function solution(numbers) {
    const nums = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
    const ans = new Set([...nums].filter((value) => !new Set(numbers).has(value)));
    const answer = [...ans].reduce((a, c) => a + c);
    return answer ? answer : -1;
}