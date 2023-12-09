function solution(k, score) {
    const scoreSet = []
    return score.map((s,idx)=>{
        scoreSet.push(s)
        scoreSet.sort((a,b)=>b-a)
        if(scoreSet.length > k){
            scoreSet.pop()
        }
        return scoreSet[scoreSet.length-1]
    })
}