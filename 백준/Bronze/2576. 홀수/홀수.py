odd_sum = 0
odd_min = 100
while True:
    try:
        num = int(input())
        if num % 2 != 0:
            odd_sum += num
            if odd_min > num:
                odd_min = num
    except:
        break

if not odd_sum:
    print(-1)
else:
    print(odd_sum)
    print(odd_min)