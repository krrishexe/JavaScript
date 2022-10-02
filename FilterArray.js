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