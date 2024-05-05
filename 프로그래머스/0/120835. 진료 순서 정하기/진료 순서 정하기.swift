import Foundation

func solution(_ e: [Int]) -> [Int] { 
    e.map { e.sorted(by: >).firstIndex(of: $0)! + 1 } 
}
