n = int(input())

for i in range(1, 2 * n):
    if i == n:
        print('*' * n)
    elif i < n:
        print(' ' * (n - i) + '*' * i )
    elif i > n:
        print(' ' * (n - (2 * n - i)) + '*' * (2 * n - i) )