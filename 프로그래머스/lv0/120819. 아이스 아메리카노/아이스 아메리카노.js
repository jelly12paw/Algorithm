function solution(money) {
    var answer = [];
    let coffee = 0;
    let charge = 0;
    
    coffee = parseInt(money / 5500)
    charge = money - (5500 * coffee)
    return [coffee, charge];
}