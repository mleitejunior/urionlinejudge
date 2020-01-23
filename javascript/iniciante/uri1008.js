let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let number = Number(lines.shift());
let hours = Number(lines.shift());
let valuePerHour = Number(lines.shift());

let salary = (hours*valuePerHour);

console.log('NUMBER = ' + number);
console.log('SALARY = U$ ' + salary.toFixed(2));