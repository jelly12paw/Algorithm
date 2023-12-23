function solution(lottos, win_nums) {
    let answer = [];
    let high_ranking = 0;
    let low_ranking = 0;
    // 1)
    let ranking = {
        '6' : 1, 
        '5' : 2,
        '4' : 3,
        '3' : 4,
        '2' : 5,
        '1' : 6,
        '0' : 6,
    }

    let same_count = lottos.filter(e => win_nums.includes(e)).length;
    let zero_count = lottos.filter(e => e===0).length;


    high_ranking = same_count + zero_count;
    answer.push(ranking[high_ranking])

    low_ranking = same_count;
    answer.push(ranking[low_ranking])

    return answer;
}