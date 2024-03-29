function solution(s) {
    const frontCheck = {}

    return s.split('').map((str,idx)=>{
        if(frontCheck[str] !== undefined){
            // 이미 존재하면 차이를 리턴하고 해당 idx로 갱신 
            const frontDistance = idx - frontCheck[str]
            frontCheck[str] = idx
            return frontDistance
        }
        else{
            frontCheck[str] = idx
            return -1
        }
    })
}