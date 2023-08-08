def solution(s):
    answer = True
    stack = []
    for i in range(len(s)):
        if s[i] == '(':
            stack.append(s[i])
        else:
            if s[0] == ')':
                return False
                break
            if stack:
                stack.pop()
    if stack:
        answer = False
    else:
        answer = True
    return answer