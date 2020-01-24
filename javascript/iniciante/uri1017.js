let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let time = Number(lines.shift());
let mediumSpeed = Number(lines.shift());

const kmPerL = 12;
let fuelQuantity = time*mediumSpeed/kmPerL;

console.log(fuelQuantity.toFixed(3));