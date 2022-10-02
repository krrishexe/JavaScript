// var min = function(list){
//     x = Math.min(...list)
//     console.log(x);
// }

// var max = function(list){
//     y= Math.max(...list)
//     console.log(y);
// }
// list= [1,2,3,-6,7]
// min(list);
// max(list);


// function findAverage(array) {
//     // your code here
//     sum=0;
//     if(array.length == 0){
//             return 0;
//         }
//     for(let i=0 ; i<array.length; i++){

//         sum+=array[i];
//     }
//     avg = sum/array.length;
//     return avg;
// }
// list= []

// console.log(findAverage(list));

// function feast(beast, dish) {
//     //your function here
//     // console.log(beast[-2]);
//     beast.slice(-1)
//     dish.slice(-1)
//     if(beast[0]==dish[0] && beast.slice(-1)==dish.slice(-1)){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(feast('blue whale' , 'boiled maggie'));


// var countSheep = function (num) {
//     var result = '';
//     //your code here
//     for(let i=0;i<num;i++){
//     result = result +(i+1)+ ` sheep...`
//     }
//     return result;
// }
// console.log(countSheep(8));


// function betterThanAverage(classPoints, yourPoints) {
//     // Your code here
//     let sum=0;
//     for(let i=0;i<classPoints.length;i++){
//         sum+=classPoints[i];
//     }
//     avg = sum/ classPoints.length;

//     if(yourPoints >= avg){
//         return true;
//     }else{
//         return false;
//     }

// }
// classPoints =[100,90,80,70,60,50];
// yourPoints = 74;
// console.log(betterThanAverage(classPoints,yourPoints));


// function grow(x) {
//     let pro=1;
//     for (let i = 0; i < x.length; i++) {
//          pro *= x[i];
//     }
//     return pro;
// }


// function maps(x) {
//     const newArr = x.map(myFunc);
//     return newArr;
// }
// const myFunc =(x)=>{
//     return 2*x;
// }
// x = [1,2,3] 
// console.log(maps(x));


// function findNextSquare(sq) {

//     x = Math.sqrt(sq);
//     if (Math.ceil(x) == Math.floor(x)) {
//         y = x + 1;
//         z = y ** 2;
//         return z;
//     }
//     else{
//         return -1;
//     }
//     // Return the next square if sq is a perfect square, -1 otherwise
//     // return -1;
// }
// console.log(findNextSquare(144));


// function invert(array) {
//     var result = '';
//     for(let i = 0; i < array.length; i++){
//         result = result + -array[i];

//     }return result;
// }
// array = [1, 2, 3, -4]
// console.log(invert(array));


// function invert(array) {
//     const newArray = array.map(Func);
//     return newArray;
// }
// const Func=(array)=>{
//     return -array;
// }
// array=[2,-3,4,4]
// console.log(invert(array)); 


// function squareDigits(num) {
//     y = String(num)
//     var result = ''; 
//     for (let i = 0; i < y.length; i++) {
//         x = y.charAt(i)
//         // x = Number(x)
//         // console.log(typeof(x));
//         result = result + x**2;
//         z = Number(result)
//     }
//     return z;
// }
// console.log(squareDigits(233));
// console.log(typeof(z));


// function countBy(x, n) {
//     let z = [];
//     for (let i = 1; i <= n; i++) {
//         z.push(x * i);
//     }
//     return z;
// }
// console.log(countBy(2, 5));

// const letterFrequency = (phrase) => {
//     // console.log(phrase);
//     let frequency = {}
//     for (const a of phrase) {
//         if (a in frequency) {
//             frequency[a] += 1;       
//         }                               // frequncy [a] == key value pair
//         else {
//             frequency[a] = 1;
//         }
//     }
//     return frequency;
// }
// phrase = "hahaha";
// console.log(letterFrequency(phrase));   


// const wordFrequency = (phrase) => {
//     // console.log(phrase);
//     words = phrase.split(" ");
//     let frequency = {}
//     for (const a of words) {
//         if (a in frequency) {
//             frequency[a] += 1;       
//         }                               
//         else {
//             frequency[a] = 1;
//         }
//     }
//     return frequency;
// }
// phrase = "haha haha you are you funny";
// console.log(wordFrequency(phrase));   



