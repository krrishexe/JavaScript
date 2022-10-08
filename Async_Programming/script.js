// Asynchronous Programming  -->
// Promises -->
// Async / Await .

// suppose you go to a restraunt and order a dish .
// meanwhile , you continue your conversation ith your friend .
// now , RESOLVED --> your waiter (API) bring your dish to you . 
// now , REJECTED --> your waiter (API) tell you that dish is not available.



// setTimeout() function takes a function as an argument
// function func(){
//     console.log("heyyy , wait for me");
// }
// setTimeout((func),2000)                 // 2000 ms i.e. -> 2 Sec.


// our first Promise.
// a promise is an object that serves as a placeholder for a future value. 

// it always take 2 condition (resolve and reject).
// if the condition is true then , it returns the resolve function and viceversa

// & if the condition is true or RESOLVED , we can pass a .then() function to console.log our value.
// & if the condition is false or REJECTED ,we can pass a .catch() function to console.log our value.

//.then()--> for resolved 
//.catch()--> for rejected 

const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        condition = false;
        condition?resolve('Soup is Ready'):reject('No soup , Request rejected');
    },2000) 
});
console.log(promise1
    .then(value => console.log(value))
    .catch(value => console.log(value))
)

console.log("fetch :",
    fetch('https://dog.ceo/api/breeds/image/random') // we are fetching, that means it is a promise. 
.then(response => response.json())              // response is also a promise because it is converting the response to a json file and it can take as much time asynchronously.
.then(value => console.log(value))
);

            // Async function is a function which tells us that , it will take some time to completely run, cz it is fetching some data from the api , it says dont wait for me(aage badh jaao) .

            //Rules for using Async / Await.
            //1). you must create a function.
            //2). you must use the keyword async.
            //3).    
        
const getDog = async()=>{
    const url = 'https://dog.ceo/api/breeds/image/random';
    const response = await fetch(url)
    const data = await response.json();
    console.log(data);
}
getDog();