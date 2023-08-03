import math

room_num = input()

nums = {'0' : 0, '1' : 0, '2' : 0, '3' : 0, '4' : 0, '5' : 0, '6' : 0, '7' : 0, '8' : 0}

for i in room_num:
    if i == '6' or i == '9':
        nums['6'] += 1
    else:
        nums[i] += 1

if nums['6'] > 1:
    nums['6'] = math.ceil(nums['6'] / 2)

cnt = [v for k, v in nums.items() if max(nums.values()) == v]

print(cnt[0])