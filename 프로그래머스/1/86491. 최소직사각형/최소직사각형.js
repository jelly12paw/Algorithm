function solution(sizes) {
    const [horizontal, vertical] = sizes.reduce(([prevX, prevY],[currentX, currentY]) => [Math.max(prevX, Math.max(currentX, currentY)), Math.max(prevY, Math.min(currentX, currentY))], [0, 0]);

    answer = horizontal * vertical;

    return answer;
}