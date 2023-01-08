n = 10 ** 6
prime = [False, False] + [True] * (n - 1)

for i in range(2, n + 1):
    if prime[i]:
        # 소수의 배수는 소수가 아님
        for j in range(2 * i, n + 1, i):
            prime[j] = False

for _ in range(int(input())):
    n = int(input())
    cnt = 0

    for k in range(n // 2 + 1):
        if prime[k] and prime[n - k]:
            cnt += 1

    print(cnt)