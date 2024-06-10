import Foundation

func solution(_ my_str:String, _ n:Int) -> [String] {
    return my_str.split(withMaxLength: n)
}

extension String {
    func split(withMaxLength length: Int) -> [String] {
        return stride(from: 0, to: self.count, by: length).map {
            let start = self.index(self.startIndex, offsetBy: $0)
            let end = self.index(start, offsetBy: length, limitedBy: self.endIndex) ?? self.endIndex
            return String(self[start..<end])
        }
    }
}
