a, b = map(int, input().split())

# 천만 이상이 되면 소수이면서 팰린드롬 수는 존재하지 않는다.
if b > 10 ** 7:
    b = 10 ** 7

# 에라토스테네스의 체

prime = [False, False] + [True] * (b - 1)

for i in range(2, b + 1):
    if prime[i]:
        for j in range(i * 2, b + 1, i):
            prime[j] = False

for k in range(a, b + 1):
    if prime[k]:
        if str(k) == str(k)[::-1]:
            print(k)

print(-1)