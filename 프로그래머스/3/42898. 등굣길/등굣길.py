def solution(c, r, puddles):
    vectors = [[0,-1],[-1,0]]
    for p in puddles:
        p[0] = p[0]-1
        p[1] = p[1]-1
    arr = [[0]*c for i in range(r)]
    arr[0][0] = 1
    for y in range(r):
        for x in range(c):
            is_move = True
            for a in puddles:
                if a[0]==x and a[1]==y:
                    is_move=False
            if not is_move:
                continue
            for vec in vectors:
                b_x = x + vec[0]
                b_y = y + vec[1]
                if b_x >= 0 and b_y >= 0:
                    arr[y][x] = arr[y][x] + arr[b_y][b_x]
    return arr[r-1][c-1]%1000000007