const billInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeopleDiv = document.getElementById('numberOfPeople');
const perPersonTotalDiv = document.getElementById('perPersonTotal');

let numberOfPeople = Number(numberOfPeopleDiv.innerText);


const calculateBill = () => {
    
    const bill = Number(billInput.value);

    // get the tip from user & convert it into a percentage (divide by 100)
    let  tipPercent = Number(tipInput.value / 100)
    
    // get the total tip amount
    let tipAmount = bill*tipPercent;
    
    // calculate the total (tip amount + bill)
    const total = tipAmount + bill;
    
    // calculate the per person total (total divided by number of people)
    const perPersonTotal = total / numberOfPeople;
    
    // update the perPersonTotal on DOM & show it to user
    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`;      

    // .toFixed() function binds the given number to 2 decimal places
    
    
}
// ** Splits the bill between more people **
const increasePeople = () => {

    // increment the amount of people
    numberOfPeople +=1;

    // update the DOM with the new number of people
    numberOfPeopleDiv.innerText = `${numberOfPeople}`

    // calculate the bill based on the new number of people
    perPersonTotal = perPersonTotalDiv.innerText /numberOfPeople;

}
