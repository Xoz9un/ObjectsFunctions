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