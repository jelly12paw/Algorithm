func solution(_ myString: String) -> Int {
    return myString.replacingOccurrences(of: "- ", with: "-")
        .replacingOccurrences(of: "+", with: "")
        .trimmingCharacters(in: .whitespacesAndNewlines)
        .split(separator: " ")
        .map { Int($0)! }
        .reduce(0, +)
}