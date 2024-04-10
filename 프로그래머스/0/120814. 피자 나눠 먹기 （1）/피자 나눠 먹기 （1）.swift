import Foundation

func solution(_ n:Int) -> Int {
    var answer: Int = 1
    if n < 8 { 
        answer = 1
    } else {
        if n % 7 == 0 {
            answer = n / 7
        } else {
            answer = n / 7 + 1
        }
    }
    return answer
}