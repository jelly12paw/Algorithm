import Foundation

func solution(_ s: String) -> Int {
    var stack = [Int]()

    for w in s.components(separatedBy: [" "]) {
        if w == "Z" {
            stack.popLast()
        } else {
            stack.append(Int(w)!)
        }
    }
    return stack.reduce(0, +)
}