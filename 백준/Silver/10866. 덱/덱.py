from collections import deque
import sys

input = sys.stdin.readline

queue = deque([])

for _ in range(int(input())):
    order = input().split()
    if order[0] == 'push_front':
        queue.appendleft(int(order[1]))
    if order[0] == 'push_back':
        queue.append(int(order[1]))
    if order[0] == 'pop_front':
        if queue:
            print(queue.popleft())
        else:
            print(-1)
    if order[0] == 'pop_back':
        if queue:
            print(queue.pop())
        else:
            print(-1)
    if order[0] == 'size':
        print(len(queue))
    if order[0] == 'empty':
        if queue:
            print(0)
        else:
            print(1)
    if order[0] == 'front':
        if queue:
            print(queue[0])
        else:
            print(-1)
    if order[0] == 'back':
        if queue:
            print(queue[-1])
        else:
            print(-1)