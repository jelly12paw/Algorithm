# 시간 초과
for _ in range(int(input())):
  n1 = int(input())
  n1_l = list(map(int, input().split()))
  n2 = int(input())
  n2_l = list(map(int, input().split()))

  for n in n2_l:
    if n in n1_l:
      print(1)
    else:
      print(0)

# 정답 코드
for _ in range(int(input())):
  n1 = int(input())
  n1_l = set(map(int, input().split()))
  n2 = int(input())
  n2_l = list(map(int, input().split()))

  for n in n2_l:
    if n in n1_l:
      print(1)
    else:
      print(0)

# 리스트 셋 튜플 정리하기