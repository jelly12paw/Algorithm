function solution(progresses, speeds) {
    let answer = [];
    let tempArr = [];

    progresses.forEach((e, i) => {
        let count = 0;

        while(e < 100) {
            e += speeds[i];

            count += 1;
        }

        tempArr.push(count)
    })

    for (let i = 0; i < tempArr.length; i++) {

        let count = 1; 
        for (let j = i + 1; j < tempArr.length; j++) {
            if (tempArr[i] >= tempArr[j]) {
                count += 1;
            } else {
                break;
            }
        }

        answer.push(count);

        i += count - 1;
    }

    return answer;
}