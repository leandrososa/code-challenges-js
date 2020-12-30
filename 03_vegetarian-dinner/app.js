'use strict';

const dishes = [{
        name: 'Lasagna',
        vegetarian: false
    },
    {
        name: 'Focaccia',
        vegetarian: true
    },
    {
        name: 'Minestrone',
        vegetarian: true
    },
    {
        name: 'Carbonara',
        vegetarian: false
    }
];

let vegetarianMenu = (set) => {
    const menu = document.querySelector('#vegetarian-menu')
    const vegetarianDishes = set.filter(dish => dish.vegetarian);

    vegetarianDishes.forEach(item => {
        let dish = document.createElement('li');
        dish.textContent = item.name;
        menu.appendChild(dish);
    });
}

vegetarianMenu(dishes);