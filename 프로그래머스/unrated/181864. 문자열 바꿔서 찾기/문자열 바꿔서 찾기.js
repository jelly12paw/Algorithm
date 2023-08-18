function solution(myString, pat) {
    const pat_re = [...pat].map(n => n === 'A' ? 'B' : 'A').join('')
    return myString.includes(pat_re) ? 1 : 0;
}