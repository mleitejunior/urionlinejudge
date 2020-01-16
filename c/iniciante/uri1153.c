/*Ler um valor N. Calcular e escrever seu respectivo fatorial. Fatorial de N = N * (N-1) * (N-2) * (N-3) * ... * 1.

Entrada
A entrada contém um valor inteiro N (0 < N < 13).

Saída
A saída contém um valor inteiro, correspondente ao fatorial de N.*/
//FATORIAL = n! = n * n-1 * n-1-1 até chegar no 1 (n-1-1-1-1-1... = 1)

// 5! = 5 . 4 . 3 . 2 . 1
// 3! = 3 . 2 . 1

#include<stdio.h>
 int fatorial (int numero); // int fatorial significa que a funcao vai nos retornar um inteiro (OPCIONAL)



int main(){
	
	int numero, resposta;
	
	scanf ("%d", &numero);
	
	resposta = fatorial(numero);
	
	printf ("%d\n", resposta);
	
}


int fatorial (int numero) { //int numero é o PARAMETRO da funcao, ou seja, a entrada que vai ser processada
	
	int n;
		
	for (n = numero-1; n > 1 ; n--) { //numero = a entrada do usuario
		numero = numero * n;	      //n = fatorial que vai diminuindo de 1 em 1
	}								  //n = numero - 1 PQ a gente vai multiplicar o numero por ele -1.
	
    return numero;
}