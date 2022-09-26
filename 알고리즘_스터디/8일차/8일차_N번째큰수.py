for _ in range(int(input())):
  nums = list(map(int, input().split()))
  nums = sorted(nums, reverse=True)
  print(nums[2])