const filter=(numbers,condition)=>{
    let z = [];
    for(let i = 0;i<numbers.length;i++){
        if(numbers[i]>=condition){
            z.push(numbers[i]);              // .push method is used to push elements into a new array.
        }
    }
    console.log(z);
}
filter([1,2,3,4,5,6],4);

// now by using filter.array method.


const nums = [22,33,44,55,66,77] 
z= nums.filter(num => num>40);                    // just learn the syntax
console.log(z);



// const nums =[10,20,30,47,50,60,70]
// z= nums.filter(num=> num>30 && num%5==0)
// console.log(z);