import Foundation

func solution(_ a:Int, _ b:Int) -> Int {
    var b = b
    var bArr = [Int]()

    var i = 2
    while i <= b {
        if b % i == 0 {
            bArr.append(i)
            b /= i
            i = 2
            continue
        }
        i += 1
    }

    let s = bArr.filter{ $0 != 2 && $0 != 5 }.reduce(1, *)

    return a < s ? 2 : a % s == 0 ? 1 : 2
}