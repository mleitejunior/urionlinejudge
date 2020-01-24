let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let totalValue = Number(input);
let remainderValue = totalValue;

let value100 = totalValue / 100;
remainderValue %= 100;
let value50 = remainderValue / 50;
remainderValue %= 50;
let value20 = remainderValue / 20;
remainderValue %= 20;
let value10 = remainderValue / 10;
remainderValue %= 10;
let value5 = remainderValue / 5;
remainderValue %= 5;
let value2 = remainderValue / 2;
remainderValue %= 2;
let value1 = remainderValue;

console.log(totalValue);
console.log(Math.floor(value100) + ' nota(s) de R$ 100,00');
console.log(Math.floor(value50) + ' nota(s) de R$ 50,00');
console.log(Math.floor(value20) + ' nota(s) de R$ 20,00');
console.log(Math.floor(value10) + ' nota(s) de R$ 10,00');
console.log(Math.floor(value5) + ' nota(s) de R$ 5,00');
console.log(Math.floor(value2) + ' nota(s) de R$ 2,00');
console.log(Math.floor(value1) + ' nota(s) de R$ 1,00');

