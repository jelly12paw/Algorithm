import Foundation

func solution(_ spell:[String], _ dic:[String]) -> Int {
    let spellSet = Set(spell)

    for word in dic {
        let tmp = Set(word.map { String($0) })
        if tmp.count == spellSet.count && tmp.isSubset(of: spellSet) {
            return 1
        }
    }

    return 2
}