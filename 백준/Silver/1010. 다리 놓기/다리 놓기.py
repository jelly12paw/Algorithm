def fact(num):
    nums = 1
    for i in range(1, num + 1):
        nums *= i
    return nums

for _ in range(int(input())):
    n, m = map(int, input().split())
    print(fact(m) // (fact(n) * fact(m - n)))