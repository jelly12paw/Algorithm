def solution(numbers):
    answer = set()

    def permutation(length, used = 0, array = ""):
        nonlocal answer

        if length == len(array):
            num = int(array)
            if isPrime(num):
                answer.add(num)
            return

        for i in range(len(numbers)):
            if used & (1 << i):
                continue
            permutation(length, used | (1 << i), array + numbers[i])

    for i in range(len(numbers)):
        permutation(i + 1)

    return len(answer)

def isPrime(n):
    if n <= 1:
        return False
    if n in [2, 3, 5, 7]:
        return True

    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False

    return True