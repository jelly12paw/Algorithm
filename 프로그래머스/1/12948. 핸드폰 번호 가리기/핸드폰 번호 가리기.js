function solution(phone_number) {
    return [...phone_number.split('')].map((num, idx) => idx > phone_number.length - 5 ? num : '*').join('');
}