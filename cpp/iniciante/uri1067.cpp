#include <iostream>
 
using namespace std;

int main () {
	
	int x,
		i;
	
	scanf ("%i", &x);
	
	if (1 <= x <= 1000) {
		
		for (i = 1; i <= x; i++) {
			if (i % 2 != 0) {
				printf ("%i\n", i);
			}
		}
	}
	
	return 0;
}