// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'





function getComputerChoice(arr) {

    for (let i = 0; i < arr.length; i++) {
        x = Math.floor(Math.random() * 3);
    }
    return arr[x];
}
const arr = ['Rock', 'Paper', 'Scissors']
console.log(getComputerChoice(arr));



function getplayerChoice(arr) {
    for (let i = 0; i < arr.length; i++) {
        x = Math.floor(Math.random() * 3);
    }
    return arr[x];
}

console.log(getplayerChoice(arr));


// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0

function getResult(playerChoice, computerChoice) {
    let score;
    if (playerChoice == 'Rock' && computerChoice == 'Rock') {
        score = 0
    }
    else if (playerChoice == 'Rock' && computerChoice == 'Paper') {
        score = -1
    }
    else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
        score = 1
    }
    else if (playerChoice == 'Paper' && computerChoice == 'Paper') {
        score = 0
    }
    else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
        score = 1
    }
    else if (playerChoice == 'Paper' && computerChoice == 'Scissors') {
        score = -1
    }
    else if (playerChoice == 'Scissors' && computerChoice == 'Scissors') {
        score = 0
    }
    else if (playerChoice == 'Scissors' && computerChoice == 'Rock') {
        score = -1
    }
    else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
        score = 1
    }
    return score;
}

console.log(getResult(getplayerChoice(arr), getComputerChoice(arr)));

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**

function showResult(score, playerChoice, computerChoice) {
    // Hint: on a score of -1
    // You should do result.innerText = 'You Lose!'
    // Don't forget to grab the div with the 'result' id!
}