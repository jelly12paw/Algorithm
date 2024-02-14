def solution(n, computers):
    c_group = [] 

    for com in computers:
        com_bin = sum(1 << i for i, el in enumerate(com) if el == 1)
        connected = set()

        for idx, con in enumerate(c_group):
            if com_bin & con:
                connected.add(idx)

        if not connected:
            c_group.append(com_bin)
        else:
            for idx in connected:
                com_bin |= c_group[idx]
            c_group = [s for i, s in enumerate(c_group) if i not in connected]
            c_group.append(com_bin)

    return len(c_group)