import Foundation

func solution(_ array:[Int]) -> [Int] {
    let max = array.enumerated().max(by: { $0.element < $1.element })!
    return [max.element, max.offset]
}