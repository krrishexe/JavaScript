
// **** Kisi BHi Class ke function ko method Kehte hai. ****
// so, whenever methods are involved , there must be classes.
//console.log()  --=> .log() is a method.
//drive();     --=> drive() is a function.


// class car{
//     constructor(name,model,price){
//         this.name = name;       // this keyword is used in classses , here 'this' refers to this class. 
//         this.model= model;
//         this.price = price;
//         this.currentSpeed = 0;
//     }
//     drive(Speed=10){
//         console.log('driving')
//         this.currentSpeed+=Speed;
//         // this.currentSpeed += 10;
//         console.log(`driving speed increased : ${this.currentSpeed}mph`)
//     }
//     brake(){
//         console.log('Braking');
//         this.currentSpeed -=10;
//     }
//     stop(){
//         console.log('!!! STOP!!!')
//         this.currentSpeed=0;
//     }
// }
// ferrari = new car('Swift','DZire','1,00,000');
// ferrari2  = new car('Porsche','Maseerati','10000000');

// // console.log(ferrari.drive());
// // console.log(ferrari.drive());
// // console.log(ferrari.drive());
// // console.log(ferrari.drive());
// // console.log(ferrari.brake());

// //=============================================

// const nums= [1,2,3,4,5]
// for(let i = 0;i<nums.length;i++){
//     ferrari.drive(20);
// }

// class Person {
//     constructor(firstName,lastName){
//         this.firstName =firstName;
//         this.lastName =lastName;
//     }
//     fullName(){
//         return ` ${this.firstName} ${this.lastName}`
//     }
// }
// x = new Person('Krish','Patel');
// console.log(x.fullName());


// Array.prototype.myPush = function (item){                // creating our own mypush function()
//     this[this.length] = item;
//     return this;
// }
// const numbers1 = [1,2,3,4,5,6];
// console.log(numbers1.myPush('str'));


// console.log(object.keys(person));         // Keys are basically the properties of an object.





class bankAccount {
    constructor(balance) {
        this.balance = balance;                 // this.balance is the current balance
    }
    deposit(balance = 100) {
        this.balance += balance;
        console.log(`deposited an amount of ${this.balance}`);    
    }
    withDraw(balance = 100) {
        if (balance > this.balance) {
            let x = console.log("you dont have Enough Money left!!!")
            return x
        } else {
            this.balance -= balance;
            console.log(`WithDrawn an amount of ${balance} \namount left : ${this.balance}`);
        }
    }
}
krish = new bankAccount(0);
// console.log(krish.deposit())



const inputValueDiv = document.getElementById("inputValue");
const depositButton = document.getElementById('deposit');
const withdrawButton = document.getElementById('withdraw');
const currentBalanceDiv = document.getElementById('currentBalance')

let balance = inputValueDiv.value;



inputValueDiv.addEventListener('keypress', function (balance) {
    if (event.keyCode === 13) {
        krish.deposit(Number(inputValueDiv.value));
        currentBalanceDiv.innerText = `${krish.balance}`
        document.getElementById('jutsu').play();
        // your code to Run
    }
}


,depositButton.onclick = () => {
    krish.deposit(Number(inputValueDiv.value));
    currentBalanceDiv.innerText = `${krish.balance}`
}                                                       //.onclick hamesha anonymous function =()=> use me leta hai!!

,withdrawButton.onclick = () => {
    krish.withDraw(Number(inputValueDiv.value));
    currentBalanceDiv.innerText = `${krish.balance}`
})
