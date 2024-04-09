import Foundation

func solution(_ n:Int) -> Int {
    let nn = Int(sqrt(Double(n)))
    return nn * nn == n ? 1 : 2 
}