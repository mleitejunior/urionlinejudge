let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let totalInSeconds = Number(input);
let remainderInSeconds = totalInSeconds;

let hours = totalInSeconds / 3600;
remainderInSeconds %= 3600;
let minutes = remainderInSeconds / 60;
remainderInSeconds %= 60;
let seconds = remainderInSeconds;

console.log(Math.floor(hours) + ':' + Math.floor(minutes) + ':' + seconds);