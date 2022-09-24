# 오답 코드
while True:
  word = input()
  
  if word == '.':
    break

  b = []
  for w in word:

    if w == '(' or w == '[':
      b.append(w)
      
    elif b != []:
      if '(' == b[-1] and w == ')':
        b.pop()
        
      elif '[' == b[-1] and w == ']':
        b.pop()

  if b == []:
    print('yes')
  else:
    print('no')

# 정답 코드
while True:
    word = input()

    if word == '.':
        break

    stack_ = []
    cnt = 0
    for ww in word:
        if ww == '(' or ww == '[':
            stack_.append(ww)
        elif not ww.isalpha():
            if stack_ != []:
                if ww == ')':
                    if stack_[-1] == '(':
                        stack_.pop()
            else:
                print('no')
                cnt = 1
                break
        
        elif ww == ']':
            if stack_[-1] == '[':
                stack_.pop()
            else:
                print('no')
                cnt = 1
                break
        else:
            print('no')
            cnt = 1
            break
                  
    if cnt == 0:
        if stack_ == []:
            print('yes')
        else:
            print('no')