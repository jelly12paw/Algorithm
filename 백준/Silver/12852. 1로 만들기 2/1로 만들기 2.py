n = int(input())
nums = [0, 0] + [0] * (n - 1)
location = [[0], [1]] + [[]] * (n - 1)

for i in range(2, n + 1):
    nums[i] = nums[i - 1] + 1
    location[i] = location[i - 1] + [i]
    if not i % 3:
        nums[i] = min(nums[i], nums[i // 3] + 1)
        if len(location[i]) > len(location[i // 3] + [i]):
            location[i] = location[i // 3] + [i]
        else:
            location[i] = location[i]
    if not i % 2:
        nums[i] = min(nums[i], nums[i // 2] + 1)
        if len(location[i]) > len(location[i // 2] + [i]):
            location[i] = location[i // 2] + [i]
        else:
            location[i] = location[i]

print(nums[n])
print(*sorted(location[n], reverse=True))