word = input()

for i in range((len(word) // 10) + 1):
    print(word[0 + (i * 10) : 10 + (i * 10)])