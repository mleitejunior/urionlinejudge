#include <stdio.h>

main () {
	
	int num,
		pares[5],
		impares[5],
		contPar=0,
		contImpar=0,
		contGeral=0,
		i;
		
	while (contGeral < 15) {
		
		scanf("%d", &num);
		
		if (num%2 == 0) {
			pares[contPar] = num;
			contPar++;
			if (contPar == 5){
				for (i=0; i<5; i++){
					printf("par[%d] = %d\n", i, pares[i]);
				}
				contPar = 0;
			}
						
		} else {
			impares[contImpar] = num;
			contImpar++;
			if (contImpar == 5){
				for (i=0; i<5; i++){
					printf("impar[%d] = %d\n", i, impares[i]);
				}
				contImpar = 0;
			}
		}
		
		contGeral++;
	}
	
	for (i=0; i<contImpar; i++) {
		printf("impar[%d] = %d\n", i, impares[i]);
	}
	
	for (i=0; i<contPar; i++) {
		printf("par[%d] = %d\n", i, pares[i]);
	}
	
	return 0;
}