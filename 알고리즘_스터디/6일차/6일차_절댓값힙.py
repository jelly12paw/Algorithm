import sys
import heapq
input = sys.stdin.readline

num = []
for _ in range(int(input())):
  n = int(input())
  if n != 0:
    heapq.heappush(num, n)
  else:
    if num == []:
      print(0)
    else:
      if heapq.heappop(num) < 0 :
        heapq.heappushpop(num, abs(heapq.heappop(num)))


# 절댓값이 씌워진 값이 음의 정수인지 양의 정수인지 어떻게 알 수 있을까
# if a < 0 :
#   a = abs(a)
# 튜플
# 8월 3일 강의