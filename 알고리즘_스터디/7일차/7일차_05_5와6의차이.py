a, b = map(int, input().split())

def five_six(a, b):
    a_five_to_six = str(a).replace('5', '6')
    a_six_to_five = str(a).replace('6', '5')
    b_five_to_six = str(b).replace('5', '6')
    b_six_to_five = str(b).replace('6', '5')

    max_ab = int(a_five_to_six) + int(b_five_to_six)
    min_ab = int(a_six_to_five) + int(b_six_to_five)

    return min_ab, max_ab

print(*five_six(a, b))