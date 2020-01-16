linha1 = input().split(" ")

n1, n2, n3, n4 = linha1

soma = ((float(n1) * 2) + (float(n2) * 3) + (float(n3) * 4) + (float(n4) * 1)) / 10

if (soma >= 7):
    print("Media: %0.1f" %soma)
    print("Aluno aprovado.")
  
elif (soma >= 5):
    print("Media: %0.1f" %soma)
    print("Aluno em exame.")
    
    exame = input()
    exame = float(exame)
    
    soma2 = (soma + exame) / 2
    
    if (soma2 >= 5):
      print("Nota do exame: %0.1f" %exame)
      print("Aluno aprovado.")
      print("Media final: %0.1f" %soma2)
    
    else:
      print("Nota do exame: %0.1f" %exame)
      print("Aluno reprovado.")
      print("Media final: %0.1f" %soma2)

else:
  print("Media: %0.1f" %soma)
  print("Aluno reprovado.")