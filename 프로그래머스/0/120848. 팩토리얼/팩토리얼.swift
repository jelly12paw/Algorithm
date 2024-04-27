import Foundation

func solution(_ n:Int) -> Int {
    var result = n
    var count = 2
    while result != 0  {
        result /= count
        count += 1

    }
    return count - 2
}