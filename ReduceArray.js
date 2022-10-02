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
result  = nums.reduce((a,b)=>a+b,0);   // this (a,b)=>a+b is a function , higher order functions always takes a function as an argument.
console.log(result);                // we can also call the upper 'sum' function in place of (a,b)=>a+b 
                                  // and 0 is called as accumulator here.


// and Here A is Always fixed , only B is the variable.
//  (to understand this line go to filterArray.js file )

// here a is the prev value and
// b is the current value.