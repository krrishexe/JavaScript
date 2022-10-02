// add=0;
// const sum=(nums)=>{
//     for(a of nums){
//         add+=a;
//     }
//     return add;
// }
// const nums = [1,2,3,4,5]
// console.log(sum(nums));


// sum of an array using the array.reduce method

const nums = [1,2,3,4,5]
result  = nums.reduce((a,b)=>a+b);   // this (a,b)=>a+b is a function , higher order functions always takes a function as an argument.
console.log(result);                // we can also call the upper 'sum' function in place of (a,b)=>a+b 

