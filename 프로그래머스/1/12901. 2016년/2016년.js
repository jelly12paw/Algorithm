function solution(a, b) {
    const daysForWeek = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    const firstDayAdd = 5
    const daysForMonth = {
        1 : 31,
        2 : 29,
        3 : 31,
        4 : 30,
        5 : 31,
        6 : 30,
        7 : 31,
        8 : 31,
        9 : 30,
        10 : 31,
        11 : 30,
        12 : 31
    }

    let dayCount = 0
    Object.entries(daysForMonth).map(([key,value])=>{
        if(Number(key) < a){
            dayCount += value
        }
        else if(Number(key) === a){
            dayCount += b
        }
    })

    const answer = daysForWeek[(dayCount+firstDayAdd-1) % 7]

    return answer;
}