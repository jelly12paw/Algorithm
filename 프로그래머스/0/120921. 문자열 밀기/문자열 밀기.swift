import Foundation

func solution(_ A:String, _ B:String) -> Int {
    var a = A
    if A == B { return 0 }
    for i in 1...B.count {
        let s = String(a.removeLast())
        a = s + a

        if a == B { return i }
    }
    return -1
}