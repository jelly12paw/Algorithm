function solution(myString) {
    return [...myString].map(n => n === 'a' || n === 'A' ? 'A' : n.toLowerCase()).join('');
}