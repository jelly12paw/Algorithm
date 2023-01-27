n = int(input())

for i in range(1, 2 * n):
    if i == n:
        print('*' * (2 * n))
    elif i < n:
        print('*' * i + ' ' * ((n - i) * 2) + '*' * i )
    elif i > n:
        print('*' * (2 * n - i) + ' ' * ((n - (2 * n - i)) * 2) + '*' * (2 * n - i) )