'use strict';

const combinedMenu = document.querySelector('#combined-menu');
const foodTruckMenus = [
    ["pizza", "pasta"],
    ["pizza", "calzones"],
    ["lobster"],
    ["calzones"]
];

let dishes = new Set();

for (let foodTruck of foodTruckMenus){
    for (let food of foodTruck){
        dishes.add(food);
    }
}

for(let dish of dishes){
    let item = document.createElement('li');
    item.textContent = dish;
    combinedMenu.appendChild(item);
}