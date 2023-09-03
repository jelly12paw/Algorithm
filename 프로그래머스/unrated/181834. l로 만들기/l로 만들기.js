function solution(myString) {
    var under_l = 'abcdefghijk';
    return [...myString].map(n => under_l.includes(n) ? 'l' : n).join('');
}