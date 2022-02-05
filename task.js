

let car = {
    color: "black",
    color: "green",
    power() {
        console.log('197');
    }
}

console.log(car.color);
car.power()

//Pears and apples are taken to the warehouse, write a function which return sum appels and pears
function calcStore(appels,pears) {
  
   let sumStore = appels + pears;

    return sumStore;
}

let funcRezult = calcStore(15, 23)
console.log(funcRezult);