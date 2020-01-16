#include <stdio.h>
#define valorPI 3.1415

int volumeBalao(int raio) {
	
	int volume;
	
	volume = (4*valorPI*(raio*raio*raio))/3;
		
	return volume;
}

int main() {
 
    int R, L, vR, volume;
    float PI = 3.1415;
    
    scanf ("%d %d", &R, &L);
    
    vR = volumeBalao(R);

    volume = L / vR;
    
    printf ("%d\n", volume);
    return 0;
}