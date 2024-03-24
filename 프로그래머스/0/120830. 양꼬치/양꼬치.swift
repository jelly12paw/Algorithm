import Foundation

func solution(_ n:Int, _ k:Int) -> Int {
    var answer = 0;

    var lamb = n * 12000
    var beverage = k * 2000
    var service = Int(n / 10) * 2000
    answer = lamb + beverage - service

    return answer;
}