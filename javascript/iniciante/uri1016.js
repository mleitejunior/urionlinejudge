let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let distance = Number(input);

const carXSpeed = 60;
const carYSpeed = 90;

let carYDistancePerMinute = carYSpeed/60 - carXSpeed/60;

let timeToAchievDistance = distance / carYDistancePerMinute;

console.log(timeToAchievDistance + ' minutos');