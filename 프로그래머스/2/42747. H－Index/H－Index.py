def solution(citations):
    answer = 0
    count=0   
    box_index=[] 
    for i in range(len(citations)):
        count=0              
        for j in range(len(citations)):
            if citations[i] <= citations[j]:
                count=count+1
        if citations[i] >= count:
            box_index.append(count)
        else:
            box_index.append(citations[i])
    box_index.sort()
    box_index.reverse()
    answer=box_index[0]             
    return answer