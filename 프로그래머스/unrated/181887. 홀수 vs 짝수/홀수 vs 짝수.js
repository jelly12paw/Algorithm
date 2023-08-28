function solution(num_list) {
    let odd = 0;
    let even = 0;
    num_list.filter((n, i) => i % 2 ? odd += n : even += n)
    return odd > even ? odd : even;
}