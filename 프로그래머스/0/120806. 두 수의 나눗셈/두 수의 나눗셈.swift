import Foundation

func solution(_ num1:Int, _ num2:Int) -> Int {
    let new = Double(num1) / Double(num2) * 1000
    return Int(new)
}