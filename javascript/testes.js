let totalInSeconds = 140153;
let remainderInSeconds = totalInSeconds;

let hours = totalInSeconds / 3600;
remainderInSeconds %= 3600;
let minutes = remainderInSeconds / 60;
remainderInSeconds %= 60;
let seconds = remainderInSeconds;

console.log(Math.floor(hours) + ':' + Math.floor(minutes) + ':' + seconds);