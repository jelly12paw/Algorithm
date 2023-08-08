words = []
answer = []

for _ in range(int(input())):
    words.append(input())

for _ in range(int(input())):
    answer.append(input())

idx_q = words.index('?')
for i in answer:
    if not i in words:
        if idx_q > 0 and idx_q < len(words) - 1:
            if words[idx_q - 1][-1] == i[0] and words[idx_q + 1][0] == i[-1]:
                print(i)
        if len(words) > 1:
            if idx_q == 0: 
                if words[idx_q + 1][0] == i[-1]:
                    print(i)
            if idx_q == len(words) - 1:
                if words[idx_q - 1][-1] == i[0]:
                    print(i)
        else:
            print(i)