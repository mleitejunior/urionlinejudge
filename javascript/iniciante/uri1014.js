let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let distance = Number(lines.shift());
let fuel = Number(lines.shift());

let kmPerL = distance/fuel;

console.log(kmPerL.toFixed(3) + ' km/l');