let input = '7 14 106';
let line = input.split(' ');

let a = Number(line.shift());
let b = Number(line.shift());
let c = Number(line.shift());

let maiorAB = (a+b+Math.abs(a-b))/2;
let maiorABC = (maiorAB > c) ? maiorAB : c;

console.log(maiorABC);