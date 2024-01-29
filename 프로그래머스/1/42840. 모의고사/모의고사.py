def solution(answers):
    answer = []

    count1 = 0
    count2 = 0
    count3 = 0

    ans1 = [1,2,3,4,5]
    ans2 = [2,1,2,3,2,4,2,5]
    ans3 = [3,3,1,1,2,2,4,4,5,5]

    for idx, a in enumerate(answers):
        if(ans1[idx%len(ans1)] == a):
            count1 += 1

    for idx, a in enumerate(answers):
        if(ans2[idx%len(ans2)] == a):
            count2 += 1

    for idx, a in enumerate(answers):
        if(ans3[idx%len(ans3)] == a):
            count3 += 1

    maxcount = max([count1, count2, count3])

    if(count1 == maxcount):
        answer.append(1)
    if(count2 == maxcount):
        answer.append(2)
    if(count3 == maxcount):
        answer.append(3)

    answer.sort()
    return answer