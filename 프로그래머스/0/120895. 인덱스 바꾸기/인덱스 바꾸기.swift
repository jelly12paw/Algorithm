func solution(_ myString: String, _ num1: Int, _ num2: Int) -> String {
    var array = ArraySlice(myString)

    array.swapAt(num1, num2)
    return array.map { String($0) }.joined()
}