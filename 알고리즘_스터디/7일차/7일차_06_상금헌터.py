# keyerror : 같은 key값을 가진 딕셔너리를 사용하면 발생

first_fes = {
    1 : 5000000, 2 : 3000000, 3 : 3000000, 4 : 2000000, 5 : 2000000, 6 : 2000000,
    7 : 500000, 8 : 500000, 9 : 500000, 10 : 500000, 11 : 300000,
    12 : 300000, 13 : 300000, 14 : 300000, 15 : 300000, 16 : 100000,
    17 : 100000, 18 : 100000, 19 : 100000, 20 : 100000, 21 : 100000
}

second_fes = {
    1 : 5120000, 2 : 2560000, 3 : 2560000, 4 : 1280000, 5 : 1280000, 6 : 1280000,
    7 : 1280000, 8 : 640000,  9 : 640000,  10 : 640000, 11 : 640000,
    12 : 640000, 13 : 640000, 14 : 640000, 15 : 640000, 16 : 320000,
    17 : 320000, 18 : 320000, 19 : 320000, 20 : 320000, 21 : 320000,
    22 : 320000, 23 : 320000, 24 : 320000, 25 : 320000, 26 : 320000,
    27 : 320000, 28 : 320000, 29 : 320000, 30 : 320000, 31 : 320000
}

for _ in range(int(input())):
    a, b = map(int, input().split())
    print(first_fes[a] + second_fes[b])