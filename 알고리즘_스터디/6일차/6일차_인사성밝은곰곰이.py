cnt = 0
ids = set()
for _ in range(int(input())):
  word = input()

  if word != 'ENTER':
    ids.add(word)
  else:
    cnt += len(ids)
    ids = set()
cnt += len(ids)
print(cnt)