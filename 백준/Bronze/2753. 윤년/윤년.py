# 연도 입력받기
n = int(input())

# 윤년은 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수
# 연도가 윤년이면 1을 출력
if n % 4 == 0 and n % 100 != 0 or n % 400 == 0 :
  print(1)
# 윤년이 아니면 0을 출력
else :
  print(0)