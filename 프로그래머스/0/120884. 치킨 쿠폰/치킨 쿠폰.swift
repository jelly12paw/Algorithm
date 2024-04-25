import Foundation

func solution(_ chicken:Int) -> Int {
    var chicken = chicken
    var service = 0
    var coupon = 0

    while chicken != 0 {
        coupon += chicken
        service += coupon / 10
        chicken = coupon / 10
        coupon %= 10
    }

    return service
}