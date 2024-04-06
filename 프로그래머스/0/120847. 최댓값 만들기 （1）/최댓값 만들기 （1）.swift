import Foundation

func solution(_ numbers:[Int]) -> Int {
    let new: [Int] = numbers.sorted(by: >)
    return new[0] * new[1]
}