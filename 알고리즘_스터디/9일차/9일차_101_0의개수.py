for _ in range(int(input())):
    n, m = map(int, input().split())

    cnt = 0
    for i in range(n, m+1):
        if '0' in str(i):
            cnt += str(i).count('0')
    
    print(cnt)