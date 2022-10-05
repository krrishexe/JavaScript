// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'




const arr = ['Rock', 'Paper', 'Scissors']


function getplayerChoice(arr) {
    let x
    for (let i = 0; i < arr.length; i++) {
        x = Math.floor(Math.random() * 3);
    }
    return arr[x];
}
let a = getplayerChoice(arr);

// a is PlayerChoice


function getComputerChoice(arr) {
    let x
    for (let i = 0; i < arr.length; i++) {
        x = Math.floor(Math.random() * 3);
    }
    return arr[x];
}

let b = getComputerChoice(arr);

// b is ComputerChoice

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0

function getResult(playerChoice, computerChoice) {
    let score;

    if (playerChoice === computerChoice) {
        score = 0
    }
    else if (playerChoice === 'Rock' && computerChoice === 'Paper') {
        score = -1
    }
    else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
        score = 1
    }
    else if (playerChoice === 'Paper' && computerChoice === 'Rock') {
        score = 1
    }
    else if (playerChoice === 'Paper' && computerChoice === 'Scissors') {
        score = -1
    }
    else if (playerChoice === 'Scissors' && computerChoice === 'Rock') {
        score = -1
    }
    else if (playerChoice === 'Scissors' && computerChoice === 'Paper') {
        score = 1
    }
    return score;
}
console.log(getResult(a, b));


// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**

function showResult(score, playerChoice, computerChoice) {

    let Result = document.getElementById('result');

    if (score == 0) {
        Result.innerText = 'Match Draw!'
    }
    else if (score == 1) {
        Result.innerText = 'You Winnnnnnn!'
    }
    else if (score == -1) {
        Result.innerText = 'You Loseeeeeee!'
    }

    // let Player = document.getElementById("player-score");

    // Hint: on a score of -1
    // You should do result.innerText = 'You Lose!'
    // Don't forget to grab the div with the 'result' id!
}
showResult(getResult(a, b), a, b);



function playGame() {
    // use querySelector to select all RPS Buttons

    // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *

    // 1. loop through the buttons using a forEach loop
    // 2. Add a 'click' event listener to each button
    // 3. Call the onClickRPS function every time someone clicks
    // 4. Make sure to pass the currently selected rps button as an argument



    // Add a click listener to the end game button that runs the endGame() function on click

}