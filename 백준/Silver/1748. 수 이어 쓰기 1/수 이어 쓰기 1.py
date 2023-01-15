n = int(input())
cnt = 0
for i in range(len(str(n)) - 1, -1, -1):
    cnt += (n - (10 ** i) + 1) * (i + 1)
    n = n - (n - (10 ** i) + 1)

print(cnt)