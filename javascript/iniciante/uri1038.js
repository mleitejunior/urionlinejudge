let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let line = input.split(' ');

let cod = Number(line.shift());
let quantity = Number(line.shift());
let total;
switch (cod) {
    case 1:
        total = quantity * 4;
        break;
    case 2:
        total = quantity * 4.5;
        break;
    case 3:
        total = quantity * 5;
        break;
    case 4:
        total = quantity * 2;
        break;
    case 5:
        total = quantity * 1.5;
        break;
}

console.log('Total: R$ ' + total.toFixed(2));