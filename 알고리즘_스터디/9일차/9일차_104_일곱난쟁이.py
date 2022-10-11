from itertools import combinations

dwarfs = []
for _ in range(9):
    dwarfs.append(int(input()))

for i in combinations(dwarfs, 7):
    if sum(i) == 100:
        print(*sorted(i), sep='\n', end='')
        break