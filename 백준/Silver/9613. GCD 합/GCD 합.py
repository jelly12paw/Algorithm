from itertools import combinations

def gcd(a, b):
    while b > 0:
        a, b = b, a % b
    return a

for _ in range(int(input())):
    n = list(map(int, input().split()))
    n = n[1 : ]
    c = list(combinations(n, 2))
    
    cnt = 0
    for i in c:
        cnt += gcd(i[0], i[1])
    print(cnt)