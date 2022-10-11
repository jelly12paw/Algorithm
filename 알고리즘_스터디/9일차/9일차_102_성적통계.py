for num in range(1, int(input())+1):
    scores = list(map(int, input().split()))

    score_re = sorted(scores[1:], reverse=True)
    
    score_gap = 0
    for i in range(len(score_re)-1):
        if score_re[i] - score_re[i+1] > score_gap:
            score_gap = score_re[i] - score_re[i+1]
        
    print('Class', num)
    print(f'Max {max(score_re)}, Min {min(score_re)}, Largest gap {score_gap}')