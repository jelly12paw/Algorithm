function solution(box, n) {
    let garo = parseInt(box[0] / n)
    let sero = parseInt(box[1] / n)
    let height = parseInt(box[2] / n)
    return garo * sero * height;
}