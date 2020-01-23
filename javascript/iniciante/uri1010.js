let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let line1 = lines.shift().split(' ');
let line2 = lines.shift().split(' ');

let cod1 = Number(line1.shift());
let qtd1 = Number(line1.shift());
let value1 = Number(line1.shift());
let cod2 = Number(line2.shift());
let qtd2 = Number(line2.shift());
let value2 = Number(line2.shift());

let total = (qtd1 * value1 + qtd2 * value2);

console.log('VALOR A PAGAR: R$ ' + total.toFixed(2));