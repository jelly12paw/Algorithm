function solution(n, k) {
    if (n / 10 >= 1) {
        k = k - parseInt(n / 10)
    }
    let n_sum = 0;
    let k_sum = 0;
    n_sum = n * 12000
    k_sum = k * 2000
    
    return n_sum + k_sum;
}