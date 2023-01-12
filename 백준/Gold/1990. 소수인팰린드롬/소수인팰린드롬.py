p = 10 ** 7

prime = [False, False] + [True] * (p - 1)

for i in range(2, p + 1):
    if prime[i]:
        for j in range(i * 2, p + 1, i):
            prime[j] = False

a, b = map(int, input().split())

if b > 10000000:
    b = 10000000

nums = [ i for i in range(a, b + 1)]

numbers = []
for i in nums:
    if prime[i]:
        numbers.append(i)

for i in numbers:
    if str(i) == str(i)[::-1]:
        print(i)

print(-1)