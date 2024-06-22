import Foundation

func solution(_ s: String) -> String {
    return Dictionary(grouping: Array(s).map(String.init), by: { $0 }).filter { $0.value.count <= 1 }
        .map { $0.key }
        .sorted(by: <)
        .joined()
}