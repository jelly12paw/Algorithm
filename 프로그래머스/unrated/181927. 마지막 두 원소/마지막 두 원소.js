function solution(num_list) {
    const re_list = num_list.slice(-2);
    re_list[0] < re_list[1] ? num_list.push(re_list[1] - re_list[0]) :
    num_list.push(re_list[1] * 2);
    return num_list
}