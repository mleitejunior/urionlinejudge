#include <iostream>
 
using namespace std;

int main () {
	
	int idade = 0,
		quantidade = 0;
	
	float 	somaDasIdades = 0.0,
			resultado;
	
	scanf ("%d", &idade);
	
	while (idade >= 0) {
		quantidade++;
		somaDasIdades += idade;
		scanf ("%d", &idade);
		
	}
	
	resultado = somaDasIdades / quantidade;
	
	printf ("%.2f\n", resultado);
	
	return 0;
}