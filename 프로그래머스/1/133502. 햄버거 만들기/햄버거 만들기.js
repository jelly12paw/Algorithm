function solution(ingredient) {
    let answer = 0;
    let count = 0;
    let temp = [];

    for(let i=0; i<ingredient.length; i++) {
        temp.push(ingredient[i]);

        if(temp.slice(-4).join('') == '1231') {              
            count += 1;

            temp.splice(-4);
        }
    }

    return count;
}