let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let name = (lines.shift());
let salary = Number(lines.shift());
let monthSales = Number(lines.shift());

let total = (salary + (monthSales*0.15));

console.log('TOTAL = R$ ' + total.toFixed(2));