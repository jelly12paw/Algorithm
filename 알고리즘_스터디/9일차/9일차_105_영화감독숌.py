n = int(input())

six = []
for i in range(666, 3000000):
    if '666' in str(i):
        six.append(str(i))

print(six[n - 1])