#include <stdio.h>

int main() {
    double a = 0,
		   vetor[12][12];
    
	char T[2];
    
	int C,
		x,
		y;
    
	scanf("%d", &C);
    scanf("%s", &T);
    
	for(x=0;x<=11;x++) {
		
        for(y=0; y<=11; y++) {
        	
        	scanf("%lf", &vetor[x][y]);
        	
			if(x == C)
            	a += vetor[x][y];
        }
    }
    
    if(T[0] == 'S')
        printf("%.1lf\n",a);
    else if(T[0] == 'M') {
        a = a/12;
        printf("%.1lf\n",a);
    }
    
	return 0;
}