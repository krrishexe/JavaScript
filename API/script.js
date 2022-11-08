console.log('hello world!!!');

// Asynchronous js ---> programming means it does not reads the codes line by line.
// meaning it does not wait for the longer code to load , instead it runs the next few lines of code till the code loads.

// .then() --> promises  (Something you have to wait for)

// STEPS
// First , it makes a request to the api server by the "Fetch" keyword.
// Second, .then() function then converts the fetched data into json file by the "response" keyword.
//Third , we console.log() that json.
// https://dog.ceo/api/breeds/image/random
// .then - Promises
// asynchronous programming

// stuff you don't have to wait for
console.log('run 1st')

const dogImageDiv = document.getElementById('dogImage')
const dogButton = document.getElementById('dogButton')

// stuff you have to wait for
const getNewDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(json => {
            dogImageDiv.innerHTML = `<img src='${json.message}' height=300 width=300/>`
            console.log(json.message);
        })
    }

dogButton.onclick = () => getNewDog()

console.log('run 3rd')



// const randomChar = require('anime-character-random');
// (async () => {
//     let x =  (await randomChar.GetChar());
//     console.log(x["CharacterImage"]);
// }) ()