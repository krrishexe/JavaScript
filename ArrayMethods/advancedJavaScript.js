// FOR loop ---> only use for loop when we know how many times we have to loop.

//** While Loops ** --> use this when we are not sure how many times we have to loop.
// let num = 0;
// while(num<5){
//     console.log(num+1);
//     num++;
// }

//addEventListener()
//DOM --> Document Object Model

// let playDiv = document.getElementById('play');
// console.log(playDiv.innerText);

// playDiv.onclick =()=> {
//     console.log('YO YO');
// }

// another method of doing this...

// playDiv.addEventListener('click',function(){
//     console.log('HEY YOO');
// })                                      //.addEventListener() is a method 
                                    // eventlistener takes 2 arguments 1). what you're listening for --> ex. 'click'  2). a funciton 


// we can also add event listener to the document.

            // KEY vs. keyCode

// document.addEventListener('keydown',function(e){
//     if(e.key == 'q'){
//         console.log('You Pressed q');
//     }else{
//         console.log('not q');
//     }
// })
// document.addEventListener('keypress',function(e){
//     if(e.keyCode == 13 ){
//         console.log('You Pressed Enter');
//     }else{
//         console.log('not Enter');
//     }
// })


document.addEventListener('keydown',function(e){
    if(e.keyCode == 13){
        document.getElementById('jutsu').play()
        console.log('pressed enter');
    }else{
        console.log('Not enter')
    }
})
