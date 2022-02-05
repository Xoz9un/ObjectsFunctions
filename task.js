//Create a car object, add a color property to it with a value of 'black'

let car = {
    color: "black", 
    //Change the color property of the car object to 'green'

    color: "green", 
    //Add the power property to the car object, which is a function and outputs the engine power to the console

    power() {
        console.log('197');
    }
}

console.log(car.color); 
car.power()

//Pears and apples are taken to the warehouse, write a function which return sum appels and pears
function calcStore(appels,pears) {

    return appels + pears;
}

console.log(calcStore(15, 23));

//Your name is stored in the payment terminal, write a function to determine the name in the terminal
function terminalName(firstName) {
    if (firstName == "Vitaly"){
        return ("Hi," + firstName);
    }

    else  {
        return ("no such name")
    } 
}

console.log(terminalName("Vald"));
console.log(terminalName("Vitaly"));

//Write a function to calculate the type of an argument and output the type to the console
function typeArgument(){

    for (var i = 0; i < arguments.length; i++) {

        console.log(typeof arguments[i]); 
    }

}

typeArgument(true,"sd",445);

//Write a function that determines if a number is prime or not
function checkNumber(n) {
    if (!Number.isInteger(n) || n < 2 ) 
        return "Not a prime number";

    let p = Math.sqrt(n);
    for (var i = 2; i <= p; i++)
    if (n % i === 0) 
        return "Not a prime number2"

        return "It a prime number"

}

console.log(checkNumber(2));
console.log(checkNumber(43.6));
console.log(checkNumber(50));
