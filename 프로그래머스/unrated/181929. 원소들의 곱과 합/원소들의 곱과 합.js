function solution(num_list) {
    const sum_ = num_list.reduce((acc, cur) => acc + cur)
    const mul_ = num_list.reduce((acc, cur) => acc * cur)
    return sum_**2 > mul_ ? 1 : 0;
}