num = []

for _ in range(int(input())):
  num.append(int(input()))

print(*sorted(num), sep='\n')