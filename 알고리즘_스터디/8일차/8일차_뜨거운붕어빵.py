n, m = map(int, input().split())

fish = []
for _ in range(n):
  fish.append(input())

for i in fish:
  print(i[::-1])