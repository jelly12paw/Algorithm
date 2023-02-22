import sys

n = int(input())
num_student = int(input())
vote = list(map(int,sys.stdin.readline().split()))

fig = []
num_fig = []

for v in vote:
    if v in fig:
        idx = fig.index(v)
        num_fig[idx] += 1
    else:
        if len(fig) >= n:
            idx = num_fig.index(min(num_fig))
            del fig[idx]
            del num_fig[idx]
        fig.append(v)
        num_fig.append(1)

fig.sort()            
print(' '.join(map(str,fig)))