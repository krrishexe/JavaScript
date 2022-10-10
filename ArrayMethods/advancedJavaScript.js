// FOR loop ---> only use for loop when we know how many times we have to loop.

//** While Loops ** --> use this when we are not sure how many times we have to loop.
// let num = 0;
// while(num<5){
//     console.log(num+1);
//     num++;
// }

//addEventListener()
//DOM --> Document Object Model

let playDiv = document.getElementById('play');
console.log(playDiv.innerText);

// playDiv.onclick =()=> {
//     console.log('YO YO');
// }

// another method of doing this...

// playDiv.addEventListener('click',function(){
//     console.log('HEY YOO');
// })                                      //.addEventListener() is a method 
                                    // eventlistener takes 2 arguments 1). what you're listening for --> ex. 'click'  2). a funciton 


// we can also add event listener to the document.

document.addEventListener('keydown',function(){
    console.log('ehyyyyy');
})
