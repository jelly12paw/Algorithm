import Foundation

func solution(_ n:Int) -> Int {
    var answer: Int = 0
    for even in 1...n {
        if even % 2 == 0 { answer += even }
    }
    return answer
}