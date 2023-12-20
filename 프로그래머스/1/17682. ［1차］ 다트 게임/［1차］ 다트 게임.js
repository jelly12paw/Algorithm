function solution(dartResult) {
    let answer = 0; 
    let tempArr= [];
    let pattern = /(\d+|\D)/g; 
    let matchArr = dartResult.match(pattern); 

    for(let i=0; i<matchArr.length; i++) {
        if(matchArr[i] == 'S') {
            tempArr.push(matchArr[i-1] ** 1)
        } 
        else if(matchArr[i] == 'D') {
            tempArr.push(matchArr[i-1] ** 2)
        }
        else if(matchArr[i] == 'T') {
            tempArr.push(matchArr[i-1] ** 3)
        }
        else if(matchArr[i] == '*') {
            tempArr[tempArr.length-1] *= 2;
            tempArr[tempArr.length-2] *= 2;
        }
        else if(matchArr[i] == '#') {
            tempArr[tempArr.length-1] = -tempArr[tempArr.length-1]
        } 
    }

    answer = tempArr.reduce((sum, e) => sum + e, 0)

    return answer;
}