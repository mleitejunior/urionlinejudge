#include <iostream>
 
using namespace std;
 
int main () {
	
	float A,
		  B,
		  C;
		  
	float perimeter,
		  trapezium;
	
	scanf ("%f%f%f",&A, &B, &C);
	
	if (A+B > C && B+C > A && C+A > B) {
		perimeter = A+B+C;
		printf ("Perimetro = %.1f\n", perimeter);
	} else {
		trapezium = C * (A+B)/2;
		printf ("Area = %.1f\n", trapezium);
	}
	
	return 0;
}