import Foundation

func solution(_ quiz:[String]) -> [String] {
    var answer: [String] = []

    for quiz in quiz {
        let qArray = quiz.trimmingCharacters(in: .whitespaces).components(separatedBy: " ").map{String($0)}
        let X = Int(qArray[0])!
        let op = qArray[1]
        let Y = Int(qArray[2])!
        let Z = Int(qArray[4])!

        let result = op == "+" ? X + Y : X - Y

        answer.append(result == Z ? "O" : "X")
    }
    return answer
}