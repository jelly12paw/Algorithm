function solution(name, yearning, photo) {
    var answer = [];
    const dict_ = {};
    for (i = 0; i < name.length; i++) {
        dict_[name[i]] = yearning[i]
    }
    const sums = photo.map((item) => item.map((names) => dict_[names] ? dict_[names] : 0));
    
    sums.forEach((items) => {
        let sum = 0; 
        items.forEach((c) => {
            sum += c;
        })
    answer.push(sum);
    });
    
    return answer;
}