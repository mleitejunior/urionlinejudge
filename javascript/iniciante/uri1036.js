let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let inputValues = input.split(' ');

let numA = Number(inputValues.shift());
let numB = Number(inputValues.shift());
let numC = Number(inputValues.shift());

/* 
Bhaskara: x = (-b +- sqrt(delta,2))/2*a
delta = b*b - 4*a*c
“Impossivel calcular”, caso haja uma divisão por 0 ou raiz de numero negativo."
*/

let delta = numB*numB - 4*numA*numC;
let r1 = (-numB + Math.sqrt(delta,2))/(numA*2);
let r2 = (-numB - Math.sqrt(delta,2))/(numA*2);

if (numA == 0 && delta < 0) {
    console.log('Impossivel calcular')
} else {
    console.log('R1 = ' + r1.toFixed(5));
    console.log('R2 = ' + r2.toFixed(5));
}