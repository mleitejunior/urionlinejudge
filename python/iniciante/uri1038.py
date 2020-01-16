precos = {1:4, 2:4.5, 3:5, 4:2, 5:1.5}

code, quant = input().split()

print ("Total: R$ {:.2f}".format(precos[int(code)]*float(quant)
))