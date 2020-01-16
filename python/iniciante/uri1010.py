linha1 = input().split(" ")
linha2 = input().split(" ")

code1, unit1, price1 = linha1
code2, unit2, price2 = linha2

VALOR = float(unit1)*float(price1)+float(unit2)*float(price2)

print ('VALOR A PAGAR: R$ {:.2f}'.format(VALOR))