import Foundation

func solution(_ n:Int, _ t:Int) -> Int {
    var virus: Int = n
    
    for v in 1...t {
        virus *= 2
    }
    return virus
}