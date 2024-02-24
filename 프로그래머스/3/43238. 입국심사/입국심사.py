def solution(n, times):
    def check(target, takeTime, times):
        cur = 0
        for examiner in times:
            cur += takeTime//examiner
        return True if cur >= target else False

    def binary_search(target, times):
        l = 1
        r = times[-1] * target
        minTime = 1e9
        while l<=r:
            mid = (l+r)//2
            if check(target, mid, times):
                minTime = mid
                r = mid-1
            else:
                l = mid+1
        return minTime

    times.sort()
    answer = binary_search(n,times)
    return answer