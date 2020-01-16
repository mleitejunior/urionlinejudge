#include <stdio.h>
int main()
{
    int X,Y, Z;
    scanf ("%i%i%i", &X, &Y, &Z);
    
    if (X < Y && X < Z) printf ("%i\n", X);
    else if (Y < Z) printf ("%i\n", Y);
    else printf ("%i\n", Z);
    
    if ((X > Y && X < Z) || (X > Z && X < Y)) printf ("%i\n", X);
    else if ((Y > Z && Y < X) || (Y > X && Y < Z)) printf ("%i\n", Y);
    else printf ("%i\n", Z);
    
    if (X > Y && X > Z) printf ("%i\n\n", X);
    else if (Y > X && Y > Z) printf ("%i\n\n", Y);
    else printf ("%i\n\n", Z);
    
    printf ("%i\n%i\n%i\n", X, Y, Z);
}