xyxy = set()

for _ in range(4):
    lb_x, lb_y, rt_x, rt_y = map(int, input().split())

    for i in range(rt_x - lb_x):
        for j in range(rt_y - lb_y):
            xyxy.add((i + lb_x, j + lb_y))

print(len(xyxy))