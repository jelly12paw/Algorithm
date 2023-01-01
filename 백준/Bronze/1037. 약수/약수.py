n = int(input())
nn = list(map(int, input().split()))

if len(nn) == 1:
    print(nn[0] ** 2)
else:
    print(min(nn) * max(nn))