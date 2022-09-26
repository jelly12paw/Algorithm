# 틀림

n = int(input())
room = []
 
for _ in range(n):
    room.append(list(input()))
 
cnt_row = 0
cnt_col = 0
 
for i in range(n):
    for j in range(n-1):
        if room[i][j] == '.' and room[i][j+1] == '.':
            cnt_row += 1
            break

re_room = [[0] * n for _ in range(n)]

for a in range(n):
    for b in range(n):
        re_room[a][b] = room[b][a]

for ii in range(n):
    for jj in range(n-1):
        if re_room[ii][jj] == '.' and re_room[ii][jj+1] == '.':
            cnt_col += 1
            break

print(cnt_row, cnt_col)


# [['.', '.', '.', '.', 'X'], 
# ['.', '.', '.', 'X', '.'], 
# ['.', 'X', '.', 'X', '.'], 
# ['.', 'X', '.', '.', '.'], 
# ['X', '.', '.', '.', '.']]