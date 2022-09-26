nums = []
nums_cnt = []

for _ in range(10):
  nums.append(int(input()))

print(sum(nums)//10)

for i in nums:
  nums_cnt.append(nums.count(i))

print(nums[nums_cnt.index(max(nums_cnt))])