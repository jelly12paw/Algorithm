import sys
input = sys.stdin.readline

bingo = []
mc = []

for i in range(10):
    if i < 5:
        bingo.append(list(map(int, input().split())))
    else:
        for j in list(map(int, input().split())):
            mc.append(j)

for n in mc:
    for x in range(5):
        for y in range(5):
            if bingo[x][y] == n:
                bingo[x][y] = 0
    cnt = 0
    for a in range(5):
        if not bingo[a][0] and not bingo[a][1] and not bingo[a][2] and not bingo[a][3] and not bingo[a][4]:
            cnt += 1
        if not bingo[0][a] and not bingo[1][a] and not bingo[2][a] and not bingo[3][a] and not bingo[4][a]:
            cnt += 1
    if not bingo[0][0] and not bingo[1][1] and not bingo[2][2] and not bingo[3][3] and not bingo[4][4]:
        cnt += 1
    if not bingo[0][4] and not bingo[1][3] and not bingo[2][2] and not bingo[3][1] and not bingo[4][0]:
        cnt += 1
    if cnt >= 3:
        print(mc.index(n) + 1)
        break