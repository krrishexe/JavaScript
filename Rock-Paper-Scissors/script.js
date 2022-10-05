// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'




const arr = ['Rock', 'Paper', 'Scissors']


// function getplayerChoice(arr) {
//     let x
//     for (let i = 0; i < arr.length; i++) {
//         x = Math.floor(Math.random() * 3);
//     }
//     return arr[x];
// }
// let a = getplayerChoice(arr);

// a is PlayerChoice


function getComputerChoice(arr) {
    let x
    for (let i = 0; i < arr.length; i++) {
        x = Math.floor(Math.random() * 3);
    }
    return arr[x];
}
getComputerChoice(arr);


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





function showResult(score, playerChoice, computerChoice) {

    let Result = document.getElementById('result');

    if (score == 0) {
        Result.innerText = 'Match Drawwwww!'
    }
    else if (score == 1) {
        Result.innerText = 'You Winnnnnnn!'
    }
    else if (score == -1) {
        Result.innerText = 'You Loseeeeeee!'
    }

    let playerScore = document.getElementById('player-score');
    let hands = document.getElementById('hands');
    playerScore.innerText = `${Number(playerScore.innerText) + score}`
    hands.innerText = `The computer chose : ${computerChoice} \n${playerChoice} vs. ${computerChoice}`
}
// showResult(getResult(playerChoice, b), playerChoice, b);


// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
    const computerChoice = getComputerChoice(arr);
    console.log({playerChoice});
    console.log({computerChoice});
    const score = getResult(playerChoice,computerChoice)
    console.log(score);
    showResult(getResult(playerChoice, computerChoice), playerChoice, computerChoice)
}


function playGame() {
    // use querySelector to select all RPS Buttons
    const rpsButtons = document.querySelectorAll('.rpsButton');
    rpsButtons.forEach(button => {
        button.onclick = () => onClickRPS(button.value);
    })
}


// ** endGame function clears all the text on the DOM **
function endGame() {
    endGameButton = document.getElementById('endGameButton');
    endGameButton.onclick = () => {
        // playerChoice = '';
        // computerChoice = ''
        console.log("End game");
        hands = '';
        playerScore = '';

    }
}



playGame();




    // Add a click listener to the end game button that runs the endGame() function on click

