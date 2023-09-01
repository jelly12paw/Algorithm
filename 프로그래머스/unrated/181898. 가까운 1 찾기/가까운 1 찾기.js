function solution(arr, idx) {
    var answer = idx;
    for (i = idx; i < arr.length; i++) {
        if (arr.slice(idx, ).includes(1)) {
            if (arr[i] !== 1) {
                answer += 1
            } else {
                break
            }
        } else {
            answer = -1;
        }
    }
    return answer;
}