let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let line1 = lines.shift().split(' ');
let line2 = lines.shift().split(' ');

let x1 = Number(line1.shift());
let y1 = Number(line1.shift());
let x2 = Number(line2.shift());
let y2 = Number(line2.shift());

let distance = Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2));

console.log(distance.toFixed(4));