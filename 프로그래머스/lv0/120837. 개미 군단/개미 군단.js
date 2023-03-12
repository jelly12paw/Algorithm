function solution(hp) {
    const five = Math.floor(hp / 5);
    const three = Math.floor((hp - (five * 5)) / 3);
    const one = hp - ((five * 5) + (three * 3));
    return five+three+one;
}