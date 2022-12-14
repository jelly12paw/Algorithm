a = set()

for i in range(1, 31):
    a.add(i)
    
aa = set()
for _ in range(28):
    aa.add(int(input()))

b = a - aa
b = sorted(b)

for i in b:
    print(i)