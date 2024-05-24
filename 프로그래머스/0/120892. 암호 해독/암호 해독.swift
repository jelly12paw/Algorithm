import Foundation

func solution(_ cipher:String, _ code:Int) -> String {
    var result = ""

    for i in stride(from: code-1, to: cipher.count, by: code) {
        result.append(cipher[cipher.index(cipher.startIndex, offsetBy: i)])
    }

    return result
}