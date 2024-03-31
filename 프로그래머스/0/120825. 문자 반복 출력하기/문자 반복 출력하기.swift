import Foundation

func solution(_ my_string:String, _ n:Int) -> String {
    var answer: String = ""
    for word in my_string {
        for i in 0..<n {
            answer.append(word)
        }
    }
    return answer
}