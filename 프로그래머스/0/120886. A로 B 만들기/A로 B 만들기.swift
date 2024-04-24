import Foundation

func solution(_ before: String, _ after: String) -> Int { 
    Array(before).sorted() == Array(after).sorted() ? 1 : 0 
}