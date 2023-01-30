n = int(input())
find_ = int(input())
lists_ = [[0] * n for i in range(n)]

k = n ** 2

d = -1
x, y = -1, 0
# 입력받은 숫자의 위치값
fx, fy = 0, 0

# 방향 설정 아래 오른쪽 위 왼쪽
dx = [1, 0, -1, 0]
dy = [0, 1, 0, -1]

for _ in range(2 * n - 1):
    d = (d + 1) % 4

    for i in range(n):
        x += dx[d]
        y += dy[d]
        lists_[x][y] = k

        if k == find_:
            fx, fy = x + 1, y + 1
        
        k -= 1

    # d의 값이 0 혹은 2라면 (아래와 위 방향이라면)
    if not d or not d % 2:
        n -= 1

for j in lists_:
    print(*j)

print(fx, fy)