let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let a = Number(lines.shift());
let b = Number(lines.shift());
let c = Number(lines.shift());
let d = Number(lines.shift());

let diferenca = (a*b-c*d);

console.log('DIFERENCA = ' + diferenca);