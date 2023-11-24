function solution(s) {
    const num = new Array(10).fill(0).map((n, i) => n === i ? n.toString() : i.toString());
    const len = [...s].filter((n) => num.includes(n)).length;
    const len_num = len === s.length ? len : 0;
    return len_num === 4 || len_num === 6 ? true : false;
}