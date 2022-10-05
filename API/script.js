console.log('hello world!!!')

// Asynchronous js ---> programming means it does not reads the codes line by line.
// meaning it does not wait for the longer code to load , instead it runs the next few lines of code till the code loads.

// .then() --> promises

// STEPS
// First , it makes a request to the api server by the "Fetch" keyword.
// Second, .then() function then converts the fetched data into json file by the "response" keyword.
//Third , we console.log() that json.

console.log('run first');
fetch("https://somelinkhere")
.then(response=>response.json)
.then(json => console.log(json))





const randomChar = require('anime-character-random');
(async () => {
    console.log(await randomChar.GetChar())
})()