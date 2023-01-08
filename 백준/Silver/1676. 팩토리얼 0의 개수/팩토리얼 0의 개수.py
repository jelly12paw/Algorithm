n = 1
for i in range(1, int(input()) + 1):
    n *= i

cnt = 0
for j in str(n)[::-1]:
    if j == '0':
        cnt += 1
    
    else:
        print(cnt)
        break