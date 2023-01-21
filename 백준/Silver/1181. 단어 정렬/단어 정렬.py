words = []

for _ in range(int(input())):
    word = input()
    word_len = len(word)

    if not (word_len, word) in words:
        words.append((word_len, word))

for i in sorted(words):
    print(i[1])