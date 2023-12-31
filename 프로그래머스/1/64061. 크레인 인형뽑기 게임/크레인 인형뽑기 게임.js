function solution(board, moves) {
    let answer = 0;
    let tempArr = [];

    moves.forEach(e => {
        let selected = select(board, e-1) 

        if(selected) {
            tempArr.push(selected);

            if(tempArr[tempArr.length-2] == tempArr[tempArr.length-1]) {
                tempArr.pop();
                tempArr.pop();
                answer += 2;
            }
        }
    })

    return answer;
}

function select(board, moves_index) {   
    for(let i=0; i<board.length; i++) {
        if(board[i][moves_index] !== 0) {
            let selected = board[i][moves_index];
            board[i][moves_index] = 0;

            return selected;
        }
    }
}