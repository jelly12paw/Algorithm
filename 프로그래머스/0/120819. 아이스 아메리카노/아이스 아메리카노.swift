import Foundation

func solution(_ money:Int) -> [Int] {
    var answer: [Int] = [];
    var coffee: Int = 0;
    var charge: Int = 0;
    
    coffee = money / 5500
    charge = money - (5500 * coffee)
    return [coffee, charge]
}