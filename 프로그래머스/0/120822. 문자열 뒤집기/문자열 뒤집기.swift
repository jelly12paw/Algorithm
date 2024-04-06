import Foundation

func solution(_ my_string:String) -> String {
    var answer: String = ""
    for i in my_string.reversed() {
        answer.append(i)
    }
    return answer
}