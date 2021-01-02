'use strict';

const coffees = [2, 3, 1, 5];
const coffeePrice = 1.25;
const calculation = (sum, currentValue) => sum + currentValue;

let final = function(arrayQty, formula, unitPrice) {
    return arrayQty.reduce(formula) * unitPrice;
}

let message = `The total bill is ${final(coffees, calculation, coffeePrice)}`;

console.log(message);