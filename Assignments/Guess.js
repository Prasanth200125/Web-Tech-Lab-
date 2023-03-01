let randomNumber = parseInt((Math.random()*100)+1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const startOver = document.querySelector('.resultParas');
const lowOrHi = document.querySelector('.lowOrHi');
const p = document.createElement('p');
let previousGuesses = [];
let numGuesses = 1;
let playGame = true;
let restartBtn=$('#restart')
restartBtn.hide()

if (playGame)
{
    subt.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}
function validateGuess(guess)
{
    if (isNaN(guess)){
        alert('Please enter a valid number');
    } else if (guess < 1 || guess > 100) {
        alert('Please enter a valid number between 1 to 100!');
    }  else {
        previousGuesses.push(guess);
        if (numGuesses === 5){
            displayGuesses(guess);
            displayMessage(`Game Over! Number was ${randomNumber}`);
            endGame();
        } else {
        displayGuesses(guess);
        checkGuess(guess);
        }
    }
}

function checkGuess(guess)
{

    if (guess === randomNumber){
        displayMessage(`You guessed correctly! The number was ${guess}`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Too low! Try greater than ${guess}`);
    } else if (guess > randomNumber) {
        displayMessage(`Too high! Try less than ${guess}`);
    }
}
function displayGuesses(guess){
    restartBtn.show()
    userInput.value = '';
    guessSlot.innerHTML += `<span class="guess_div">${guess}  </span>`;
    numGuesses++
    remaining.innerHTML = `${6 - numGuesses}  `;
}


function displayMessage(message)
{
    lowOrHi.innerHTML = `<h1>${message}</h1>`
}

function endGame()
{
    userInput.value = '';
    userInput.setAttribute('disabled', '');
          p.classList.add('button');
          p.innerHTML = `<h1 id="newGame">Start New Game</h1>`
    startOver.appendChild(p);
    playGame = false;
    restartBtn.hide()
    newGame();
}

function newGame()
{
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(){
        randomNumber = parseInt((Math.random()*100)+1);
        previousGuesses = [];
        numGuesses = 1;
        guessSlot.innerHTML = '';
        lowOrHi.innerHTML = '';
        remaining.innerHTML = `${6 - numGuesses}  `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}

restartBtn.addEventListener('click', function(e)
{
    randomNumber = parseInt((Math.random()*100)+1);
    previousGuesses = [];
    numGuesses = 1;
    guessSlot.innerHTML = '';
    lowOrHi.innerHTML = '';
    remaining.innerHTML = `${6 - numGuesses}  `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
    
});
