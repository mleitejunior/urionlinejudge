import math

list1 = input().split(" ")
list2 = input().split(" ")

x1, y1 = list1
x2, y2 = list2

distance = math.sqrt((float(x2) - float(x1))**2 + (float(y2) - float(y1))**2)

print ('{:.4f}'.format(distance))