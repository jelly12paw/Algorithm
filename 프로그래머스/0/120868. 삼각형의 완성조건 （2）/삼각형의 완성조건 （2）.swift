import Foundation

func solution(_ sides:[Int]) -> Int {
    let (minEdge, maxEdge) = (sides.min()!, sides.max()!)
    let case1 = (1..<maxEdge).filter { minEdge + $0 > maxEdge }.count
    let case2 = (maxEdge..<(minEdge + maxEdge)).filter {minEdge + maxEdge > $0 }.count
    return case1 + case2
}