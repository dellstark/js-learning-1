/* 

var currentNumber = document.getElementById('currentNumber');

function increment(){
    currentNumber.innerHTML = parseInt(currentNumber.innerHTML) + 1;
}
function decrement(){
    currentNumber.innerHTML = parseInt(currentNumber.innerHTML) - 1;
}

function contador(){
    var currentNumber = document.getElementById('currentNumber');
    return currentNumber.ariaColCount.length();
}
    
*/

let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
}

function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
}

 /* pontosDeVida = pontosDeVida + 1*/

pontosDeVida = 0;
let total;
for (let i = 0; i < 10; i++){
    pontosDeVida = pontosDeVida + 1;
    total = pontosDeVida;
    console.log("Tomou poção de vida: " + pontosDeVida);
}

console.log("Total de pontos de vida: " + total);