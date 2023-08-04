import math
def solution(progresses, speeds):
    answer = []
    days = [math.ceil((100-p) / s) for p, s in zip(progresses, speeds)]

    idx = 0 
    for i in range(len(days)) :
        if days[idx] < days[i] :      
            answer.append(i - idx)    
            idx = i                   

    answer.append(len(days) - idx)    
    return answer