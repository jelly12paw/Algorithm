from itertools import permutations

n, m = map(int, input().split())

nums = [ i for i in range(1, n + 1)]

for j in list(permutations(nums, m)):
    print(*j)