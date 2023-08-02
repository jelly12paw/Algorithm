function solution(num_list) {
    let odd = '';
    let even = '';
    num_list.forEach(n => n % 2 ? even += n.toString() : odd += n.toString());
    return Number(odd) + Number(even);
}