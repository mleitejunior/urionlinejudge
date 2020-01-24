let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let inputValue = Number(input);

if (inputValue >= 0 && inputValue <= 25) {
    console.log('Intervalo [0,25]');
} else if (inputValue > 25 && inputValue <= 50) {
    console.log('Intervalo (25,50]');
} else if (inputValue > 50 && inputValue <= 75) {
    console.log('Intervalo (50,75]');
} else if (inputValue > 75 && inputValue <= 100) {
    console.log('Intervalo (75,100]');
} else {
    console.log('Fora de intervalo');
}