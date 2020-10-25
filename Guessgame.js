// random number in [1, 100] 
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("random no: " + randomNumber);

const prevGuesses = document.querySelector(".prevGuess");
const result = document.querySelector(".result");
const highLow = document.querySelector(".highLow");
const guessField = document.querySelector(".guessField");
const guessSubmit = document.querySelector(".guessSubmit");

let inputCount = 1;
let resetButton;

function guessFunction() {

    let guessedNumber = Number(guessField.value);
    //console.log(`guessed no: ${guessedNumber}`);

    if (inputCount === 1) {
        prevGuesses.textContent = "Previous guesses: ";
    }

    prevGuesses.textContent += guessedNumber + ' ';

    if (guessedNumber === randomNumber) {
        result.style.backgroundColor = "green";
        result.textContent = "Congratulations! You got it right";
        highLow.textContent = '';
        GameOver();
    } else if (inputCount === 10) {
        result.textContent = "!!! GAME OVER !!!";
        highLow.textContent = '';
        GameOver();
    } else {
        result.style.backgroundColor = "red";
        result.textContent = "Wrong!";
        if (guessedNumber > randomNumber) {
            highLow.textContent = "Your guessed number is higher than answer";
        } else {
            highLow.textContent = "Your guessed number is lower than answer";
        }
    }
    inputCount++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', guessFunction);

function GameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame(){
    inputCount = 1;

    const resetParas =  document.querySelectorAll('.resultDiv p');
    for(let i =0; i < resetParas.length; i++){
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    result.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;

}

