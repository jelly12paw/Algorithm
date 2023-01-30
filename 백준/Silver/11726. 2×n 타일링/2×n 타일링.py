nums = [0] * 1001
nums[1] = 1
nums[2] = 2

for i in range(3, 1001):
    nums[i] = nums[i - 1] + nums[i - 2]

print(nums[int(input())] % 10007)