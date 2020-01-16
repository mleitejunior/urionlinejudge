#include <iostream>
 
using namespace std;
 
int main() {
 
    double R,A;
    scanf("%lf", &R); //lf para precisão do double
    A = 3.14159 * R * R;
    printf("A=%.4lf\n", A);
    return 0;
}