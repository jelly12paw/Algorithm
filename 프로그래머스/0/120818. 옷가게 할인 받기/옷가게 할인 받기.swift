import Foundation

func solution(_ price:Int) -> Int {    
    var discount = price    
    if price >= 500000 { discount = Int(Double(price)*0.8) }    
    else if price >= 300000 { discount = Int(Double(price)*0.9) }    
    else if price >= 100000 { discount = Int(Double(price)*0.95) }     
    
    return discount
}