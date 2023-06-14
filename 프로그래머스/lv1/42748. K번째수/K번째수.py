def solution(array, commands):
    answer = []
    for nums in commands:
        answer.append(sorted(array[nums[0] - 1 : nums[1]])[nums[2] - 1])
    return answer