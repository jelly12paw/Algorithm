import Foundation

func solution(_ board:[[Int]]) -> Int {
    var graph = board

    for i in 0..<graph.count {
        for j in 0..<graph.count {
            if graph[i][j] != 1 { continue }

            let minX = i-1 < 0 ? 0 : i-1
            let maxX = i+1 > board.count-1 ? board.count-1 : i+1
            let minY = j-1 < 0 ? 0 : j-1
            let maxY = j+1 > board.count-1 ? board.count-1 : j+1
            for m in minX...maxX {
                for n in minY...maxY {
                    if graph[m][n] == 1 { continue }
                    graph[m][n] = 2
                }
            }
        }
    }
    return graph.flatMap{ $0 }.filter{ $0 == 0 }.count
}