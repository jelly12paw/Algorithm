import Foundation

func solution(_ bin1:String, _ bin2:String) -> String {
    let int1 = Int(bin1, radix: 2)!
    let int2 = Int(bin2, radix: 2)!
    return String(int1 + int2, radix: 2)
}
