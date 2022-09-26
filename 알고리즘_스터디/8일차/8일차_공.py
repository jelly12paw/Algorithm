cups = ['1', '2', '3']

for _ in range(int(input())):
    a, b = map(int, input().split())
    cups[a - 1], cups[b - 1] = cups[b - 1], cups[a - 1]

print(cups.index('1') + 1)