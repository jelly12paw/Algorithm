word = input()
alpha = [0] * 26

for i in word:
    alpha[ord(i) - 97] += 1

print(*alpha)