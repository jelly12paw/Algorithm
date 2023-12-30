function solution(s, skip, index) {
    var answer = '';
    var tempArr = [];

    s = s.split('')
    skip = skip.split('')

    s = s.map(e => e.charCodeAt())
    skip = skip.map(e => e.charCodeAt())

    s.forEach(e => {
        for(var i=0; i<index; i++) {
            e+=1;
            if (e > 122) {
                e -= 26;
            }

            while (skip.includes(e)) {
                e+=1; 
                if (e > 122) {
                    e -= 26;
                }
            }
        }
        tempArr.push(e)
    })

    tempArr.forEach(e => {
        answer += String.fromCharCode(e)
    })

    return answer;
}