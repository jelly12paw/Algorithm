# 시간초과 sys로 해결

import heapq
import sys
input = sys.stdin.readline

num = []
heapq.heapify(num)

for _ in range(int(input())):
  n = int(input())
  if n == 0:
    if num != []:
      print(heapq.heappop(num))
    else:
      print(0)
  else:
    heapq.heappush(num, n)

