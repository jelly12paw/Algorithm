for _ in range(int(input())):
  word = list(input().split())

  for i in word:
    print(i[::-1], end=' ')