import Foundation

func solution(_ dots:[[Int]]) -> Int {
    if getInclination(dots[0], dots[1]) == getInclination(dots[2], dots[3]) {
        return 1
    } else if getInclination(dots[0], dots[2]) == getInclination(dots[1], dots[3]) {
        return 1
    } else if getInclination(dots[0], dots[3]) == getInclination(dots[1], dots[2]) {
        return 1
    } else {
        return 0
    }
}

private func getInclination(_ dot1: [Int], _ dot2: [Int]) -> Double {
    guard ((dot1[0] - dot2[0]) != 0) else { return -1 }
    guard ((dot1[1] - dot2[1]) != 0) else { return -2 }
    return Double(dot1[1] - dot2[1]) / Double(dot1[0] - dot2[0])
}