'use strict';

const clock = document.querySelector('#clock');

const addZero = (i) => (i < 10) ? "0" + i : i;

const updateClock = function(){
    let time = new Date(),
    h = addZero(time.getHours()),
    m = addZero(time.getMinutes()),
    s = addZero(time.getSeconds());
    let string = `${h}:${m}:${s}`;
    clock.textContent = string;
    setTimeout( function(){ updateClock()}, 500);
}

updateClock();