import sys
import math
m,n = map(int,input().split(" "))

l = [True for i in range(n + 1)]

for i in range(2, int(math.sqrt(n)) + 1):
    if l[i] == True: 
        
        j = 2 
        while i * j <= n:
            l[i * j] = False
            j += 1


for i in range(m, n + 1):
    if l[i]:
        if i != 1:
            print(i)