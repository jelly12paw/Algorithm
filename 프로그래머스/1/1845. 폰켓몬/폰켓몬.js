function solution(nums) {
    let answer; 
    const uniqueArrNums = nums.filter((value, index, self) => self.indexOf(value) === index);
    answer = Math.min(uniqueArrNums.length, nums.length / 2);

    return answer;
}