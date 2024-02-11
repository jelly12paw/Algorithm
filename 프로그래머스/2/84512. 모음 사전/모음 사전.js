function solution(word) {
    let answer = 0;
    let words = ['A', 'E', 'I', 'O', 'U'];
    let tempArr = [];

    function DFS(current, depth) {
        if (depth <= 5) {
            tempArr.push(current);

            for (let i = 0; i < words.length; i++) {
                DFS(current + words[i], depth + 1);
            }
        }
    }

    DFS('', 0);

    answer = tempArr.indexOf(word);
    return answer;
}