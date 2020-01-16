name = input()
salary = input()
bonus = input()

SALARY = float(salary) + (float(bonus)*0.15)
print ('TOTAL = R$ {:.2f}'.format(SALARY))