import Foundation
 
let line = readLine()!
let intArr = line.components(separatedBy: " ").map{ Int($0)! }
print(intArr.reduce(0, +))