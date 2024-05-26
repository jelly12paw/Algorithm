import Foundation

func solution(_ babbling:[String]) -> Int {
   var answer: Int = 0
    for babble in babbling {
        var newString: String
        if babble.contains("ayaaya") { continue }
        else if babble.contains("yeye") { continue }
        else if babble.contains("woowoo") { continue }
        else if babble.contains("mama") { continue }
        else {
            newString = babble.replacingOccurrences(of: "aya", with: ".")
            newString = newString.replacingOccurrences(of: "ye", with: ".")
            newString = newString.replacingOccurrences(of: "woo", with: ".")
            newString = newString.replacingOccurrences(of: "ma", with: ".")
            if newString.filter { $0 == "." }.count == newString.count {
                answer += 1
            }
        }
    }
    return answer
}