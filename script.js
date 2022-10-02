// let title = document.getElementById('title');
// console.log(title.innerText); 

// let message = "hello fuckers";
// title.innerText = message;   // .innerText Changes the text inside of an element only
// console.log(title);

// title.innerHTML = `<p>my name is krish and ${message}</p>` // .innerHTML should be used inside of a parent element , cause it changes the properties of the inner element , 
//                                                             // in this case , its changing the properties of the inner element <h2> , which is inside the div tag (parent tag).
// console.log(title);
// title.style.color= "green";
// title.style.backgroundColor= "red";

let red = document.getElementById("red");
let green= document.getElementById("green");
let yellow = document.getElementById("yellow");

    // red.onclick = () =>{
    //     console.log("user has clicked red");
    // }
    // green.onclick = () =>{
    //     console.log("user has clicked green");
    // } 
    // yellow.onclick = () =>{
    //     console.log("user has clicked yellow");
    // }

const squares = document.querySelectorAll('.colorSquare');
// console.log(squares[0].value);
// console.log(squares[1].value);
// console.log(squares[2].value);
// console.log(squares[3].value);
// console.log(squares[4].value); 

// what if there are more than 3 elements ??  we have to use loop here
// forEach loop

squares.forEach(square => {
    square.onclick =()=> console.log(square.value);
    
    // console.log(square.value)
})


