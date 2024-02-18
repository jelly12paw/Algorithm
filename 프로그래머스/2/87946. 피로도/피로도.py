def solution(k, dungeons):
    answer = -1

    def rec(c, k, ds):
        nonlocal answer

        for i, d in enumerate(ds):
            if k >= d[0]:
                nds = ds.copy()
                nds.pop(i)
                count = rec(c + 1, k - d[1], nds)
                if answer < count:
                    answer = count
        return c

    rec(0, k, dungeons)

    return answer