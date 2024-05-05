import Foundation

func solution(_ keyinput:[String], _ board:[Int]) -> [Int] {
    var x = 0,
        y = 0

    keyinput.forEach {
        switch $0 {
        case "up" where y < ((board[1] - 1) / 2): y += 1
        case "down" where y > -((board[1] - 1) / 2): y -= 1
        case "right" where x < ((board[0] - 1) / 2): x += 1
        case "left" where x > -((board[0] - 1) / 2): x -= 1
        default: break
        }
    }

    return [x, y]
}