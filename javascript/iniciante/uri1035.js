let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let inputValues = input.split(' ');

let numA = Number(inputValues.shift());
let numB = Number(inputValues.shift());
let numC = Number(inputValues.shift());
let numD = Number(inputValues.shift());

if (numB > numC &&
    numD > numA &&
    (numC+numD) > (numA+numB) &&
    (numC > 0 && numD > 0) &&
    (numA % 2) == 0) {
        console.log('Valores aceitos');
    } else {
        console.log('Valores nao aceitos');
    }