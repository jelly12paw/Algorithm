import Foundation

func solution(_ i:Int, _ j:Int, _ k:Int) -> Int {
    return (i...j)
    .map { 
        String($0).filter { String($0) == String(k) }.count
    }
    .reduce(0, +)
}