from itertools import combinations

n, m = map(int, input().split())
nums = list(map(int, input().split()))

n_sum = 0
for i in combinations(nums, 3):
    if sum(i) <= m and sum(i) > n_sum:
        n_sum = sum(i)

print(n_sum)