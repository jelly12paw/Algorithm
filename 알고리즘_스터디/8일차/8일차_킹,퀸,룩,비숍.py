horse = [1, 1, 2, 2, 2, 8]

dh = list(map(int, input().split()))

for i in range(6):
  if dh[i] == horse[i]:
    print(0, end=' ')

  else:
    print(horse[i] - dh[i], end=' ')