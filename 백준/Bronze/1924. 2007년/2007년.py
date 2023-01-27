mon = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

month, day = map(int, input().split())

cnt = 0
for i in range(month - 1):
    cnt += mon[i]

print(days[(cnt + day) % 7])