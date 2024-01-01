function solution(numbers, hand) {
    let answer = '';
    let keypad = [
        [3, 1],
        [0, 0], [0, 1], [0, 2],
        [1, 0], [1, 1], [1, 2],
        [2, 0], [2, 1], [2, 2],
    ]
    let left = [3, 0];
    let right = [3, 2]

    function left_press(num) {
        left = keypad[num];       
        return answer += 'L'
    }

    function right_press(num) {
        right = keypad[num];       
        return answer += 'R'
    }

    numbers.forEach(e => {
        if(e == 1 || e == 4 || e == 7) {
            left_press(e);
        } else if(e == 3 || e == 6 || e == 9) {
            right_press(e);
        } else {
            let left_compare = Math.abs(left[0] - keypad[e][0]) + Math.abs(left[1] - keypad[e][1])
            let right_compare = Math.abs(right[0] - keypad[e][0]) + Math.abs(right[1] - keypad[e][1])


            if(left_compare < right_compare) {
                left_press(e)
            } else if(left_compare > right_compare) {
                right_press(e)
            } else {
                if(hand == 'left') {
                    left_press(e)
                } else {
                    right_press(e)
                }
            }
        }
    })



    return answer;
}