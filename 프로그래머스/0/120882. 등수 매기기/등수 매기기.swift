import Foundation

func solution(_ score:[[Int]]) -> [Int] {
    let average = score.map { (Double($0[0] + $0[1]) / 2.0) }
    let sortedAverage = average.sorted(by: >)
    return average.map { (sortedAverage.firstIndex(of: $0) ?? 0) + 1 }
}