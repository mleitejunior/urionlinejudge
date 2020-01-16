#include <stdio.h>
#include <math.h>

int main () {
	
	double A, B, C;
	float delta, r1, r2, raiz, x;
	
	scanf ("%lf", &A);
	scanf ("%lf", &B);
	scanf ("%lf", &C);
	
	delta = pow (B,2) - (4*A*C);
	r1 = (-B + sqrt(delta)) / (2*A);
	r2 = (-B - sqrt(delta)) / (2*A);
	
	
	if (delta < 0 || A == 0) {
		printf ("Impossivel calcular\n");
	} else {
		printf ("R1 = %.5f\n", r1);
		printf ("R2 = %.5f\n", r2);
	}
	
	return 0;
}