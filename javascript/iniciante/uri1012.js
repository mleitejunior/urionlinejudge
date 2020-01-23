let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let line = input.split(' ');

let a = Number(line.shift());
let b = Number(line.shift());
let c = Number(line.shift());

const pi = 3.14159;

let triangulo = a*c/2;
let circulo = pi*Math.pow(c,2);
let trapezio = (a+b)*c/2;
let quadrado = b*b;
let retangulo = a*b;

console.log('TRIANGULO: ' + triangulo.toFixed(3));
console.log('CIRCULO: ' + circulo.toFixed(3));
console.log('TRAPEZIO: ' + trapezio.toFixed(3));
console.log('QUADRADO: ' + quadrado.toFixed(3));
console.log('RETANGULO: ' + retangulo.toFixed(3));
