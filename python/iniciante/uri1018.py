numero = int(input())
if 0 < numero < 1000000:
    print(numero)
    x = numero // 100
    print('{} nota(s) de R$ 100,00'.format(x))
    y = numero % 100
    z = y // 50
    print('{} nota(s) de R$ 50,00'.format(z))
    w = y % 50
    q = w // 20
    print('{} nota(s) de R$ 20,00'.format(q))
    u = w % 20
    i = u // 10
    print('{} nota(s) de R$ 10,00'.format(i))
    v = u % 10
    n = v // 5
    print('{} nota(s) de R$ 5,00'.format(n))
    j = v % 5
    h = j // 2
    print('{} nota(s) de R$ 2,00'.format(h))
    a = j % 2
    b = a // 1
    print('{} nota(s) de R$ 1,00'.format(b))
