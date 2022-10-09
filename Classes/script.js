


// **** Kisi BHi Class ke function ko method Kehte hai. ****
// so, whenever methods are involved , there must be classes.
//console.log()  --=> its a method.
//drive();     --=> its a function.


class car{
    constructor(name,model,price){
        this.name = name;       // this keyword is used in classses , here 'this' refers to this class. 
        this.model= model;
        this.price = price;
        this.currentSpeed = 0;
    }
    drive(Speed=10){
        console.log('driving')
        this.currentSpeed+=Speed;
        // this.currentSpeed += 10;
        console.log(`driving speed increased : ${this.currentSpeed}mph`)
    }
    brake(){
        console.log('Braking');
        this.currentSpeed -=10;
    }
    stop(){
        console.log('!!! STOP!!!')
        this.currentSpeed=0;
    }
}
ferrari = new car('Swift','DZire','1,00,000');
ferrari2  = new car('Porsche','Maseerati','10000000');

// console.log(ferrari.drive());
// console.log(ferrari.drive());
// console.log(ferrari.drive());
// console.log(ferrari.drive());
// console.log(ferrari.brake());

//=============================================

const nums= [1,2,3,4,5]
for(let i = 0;i<nums.length;i++){
    ferrari.drive(20);
}

// ferrari.stop()
// console.log(ferrari.currentSpeed);
// console.log(ferrari2.name);
// console.log(ferrari2.model);
// console.log(ferrari2.price);








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