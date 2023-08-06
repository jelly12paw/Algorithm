word = input()
bomb = input()

stack = []
for i in range(len(word)):
    stack.append(word[i])
    if ''.join(stack[-(len(bomb)):]) == bomb:
        for _ in range(len(bomb)):
            stack.pop()

if not stack:
    print('FRULA')
else:
    print(''.join(stack))