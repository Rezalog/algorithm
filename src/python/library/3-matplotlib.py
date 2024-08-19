import matplotlib.pyplot as plt

# Matplotlib: 데이터를 시각화할 수 있는 다양한 도구를 제공합니다.


# 간단한 플롯 생성
x = [1,2,3,4,5]
y = [2,3,5,7,11]
plt.plot(x, y)
plt.xlabel('x-axis')
plt.ylabel('y-axis')
plt.title('Simple Plot')
plt.show()
