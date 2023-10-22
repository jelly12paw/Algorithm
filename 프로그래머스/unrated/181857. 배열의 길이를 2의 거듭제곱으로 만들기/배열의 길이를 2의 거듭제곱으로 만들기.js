function solution(arr) {
    const twotwo = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]
    if (twotwo.includes(arr.length)) {
        return arr
    } else {
        const gaps = twotwo.map((i) => i - arr.length);
        const gap = gaps.filter((i) => i > 0)[0];
        const idx = gaps.indexOf(gap);
        const zero = new Array(twotwo[idx] - arr.length).fill(0);
        return [...arr, ...zero]
    } 
}