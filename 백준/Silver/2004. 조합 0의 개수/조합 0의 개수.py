n, m = map(int, input().split())

# 2의 개수를 구하기
def two_count(n):
    two = 0
    while n != 0:
        n = n // 2
        two += n
    return two
# 5의 개수를 구하기
def five_count(n):
    five = 0
    while n != 0:
        n = n // 5
        five += n
    return five

# 지수 계산을 이용하여 개수 구하기
cnt_two = two_count(n) - two_count(n - m) - two_count(m)
cnt_five = five_count(n) - five_count(n - m) - five_count(m)

# 2와 5 중 작은 값을 출력 
print(min(cnt_two, cnt_five))