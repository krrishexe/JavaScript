// Higher order Functions 

// it always takes in a function as an argument.
// map --> loops and returns an array
// filter --> loops and returns an array with matching condition
// reduce --> (SUM : think of reduce) 



const doubleFunc=(z)=>{
    return z.map(number => number *2)
}
let z =[12,34,56,23];
console.log(doubleFunc(z));
