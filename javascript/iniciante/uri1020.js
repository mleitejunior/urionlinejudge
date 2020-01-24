let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let totalInDays = Number(input);
let remainderInDays = totalInDays;

let years = totalInDays / 365;
remainderInDays %= 365;
let months = remainderInDays / 30;
remainderInDays %= 30;
let days = remainderInDays;

console.log(Math.floor(years) + ' ano(s)');
console.log(Math.floor(months) + ' mes(es)');
console.log(Math.floor(days) + ' dia(s)');