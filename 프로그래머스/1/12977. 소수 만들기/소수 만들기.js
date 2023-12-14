function solution(nums) {
    let answer = 0
    const addNums = []

    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            for(let k=j+1;k<nums.length;k++){
                addNums.push(nums[i] + nums[j] + nums[k])
            }
        }
    }

    addNums.forEach(num=>{
        let isSosu = true
        for(let i=2;i<=Math.sqrt(num);i++){
            if(num % i === 0)
                isSosu = false
        }
        answer += (isSosu ? 1 : 0)
    })

    return answer
}