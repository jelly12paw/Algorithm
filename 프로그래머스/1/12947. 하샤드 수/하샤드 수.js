function solution(x) {
    const sum_ = (x+"").split('').reduce((acc, cur) => +acc + +cur);
    return x % sum_ ? false : true;
}