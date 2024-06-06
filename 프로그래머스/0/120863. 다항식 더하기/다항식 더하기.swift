func solution(_ polynomial: String) -> String {
    var xCount = 0
    var num = 0

    for s in polynomial.split(separator: " ") {
        if s.contains("x") {
            xCount += (s == "x" ? 1 : (Int(s.replacingOccurrences(of: "x", with: "")) ?? 0))
        } else if s != "+" {
            num += Int(s) ?? 0
        }
    }
    return (xCount != 0 ? xCount > 1 ? "\(xCount)x" : "x" : "") + (num != 0 ? "\((xCount != 0 ? " + " : ""))\(num)" : xCount == 0 ? "0" : "")
}