function solution(arr1, arr2) {
    var answer = 0;
    return arr1.length > arr2.length ? 1 : arr1.length === arr2.length ? arr1.reduce((acc, cur) => acc + cur) > arr2.reduce((acc, cur) => acc + cur) ? 1 : arr1.reduce((acc, cur) => acc + cur) < arr2.reduce((acc, cur) => acc + cur) ? -1 : 0 : -1;
}