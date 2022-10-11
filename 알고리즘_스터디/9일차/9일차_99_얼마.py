for _ in range(int(input())):
    car = []
    car.append(int(input()))
    for _ in range(int(input())):
        p, q = map(int, input().split())
        car.append(p * q)
    
    print(sum(car))