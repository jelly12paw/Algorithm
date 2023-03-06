def solution(numbers, target):
    answer = [0]
    for i in numbers:
        nums = []
        for j in answer:
            nums.append(j + i)
            nums.append(j - i)
        answer = nums
    return answer.count(target)