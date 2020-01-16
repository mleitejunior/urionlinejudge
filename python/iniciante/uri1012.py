list1 = input().split(" ")
A,B,C = list1
pi = 3.14159

tri = float(A)*float(C)/2
cir = float(C)**2*pi
tra = (float(A)+float(B))*float(C)/2
qua = float(B)*float(B)
ret = float(A)*float(B)

print ('TRIANGULO: {:.3f}\nCIRCULO: {:.3f}\nTRAPEZIO: {:.3f}\nQUADRADO: {:.3f}\nRETANGULO: {:.3f}'.format(tri,cir,tra,qua,ret))