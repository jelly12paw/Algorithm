function solution(players, callings) {
    var answer = [];

    let obj = {}
    players.forEach((e, i)=> {
        obj[e] = (obj[e] |0) + i
    })

    for(let i=0; i<callings.length; i++) {
        let player_index = obj[callings[i]];

        if(player_index > 0 && player_index != undefined) {

            let temp = players[player_index -1]; 
            players[player_index -1] = players[player_index]; 
            players[player_index] = temp; 

            obj[players[player_index -1]] =  player_index -1;
            obj[players[player_index]] = player_index;
        }
    }

    answer = players;

    return answer;
}