function solution(s){
    let p_cnt = 0;
    let y_cnt = 0;    
    [...s.toLowerCase()].forEach((i) => {
        if (i === 'p') p_cnt++;
        if (i === 'y') y_cnt++;
    })
    
    return p_cnt === y_cnt;
}