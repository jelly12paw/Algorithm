num = input()
nums = num.split('-')

sum_ = 0

num_sum = sum(map(int, nums[0].split('+')))
if num[0] == '-':
    sum_ -= num_sum
else:
    sum_ += num_sum

for i in nums[1:]:
    sums = sum(map(int, i.split('+')))
    sum_ -= sums

print(sum_)