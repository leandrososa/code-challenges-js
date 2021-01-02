'use strict';

const stops = ['Poughkeepsie', 'Newburgh', 'Peekskill', 'Yonkers', 'Bronx', 'Grand Central'];
const button = document.querySelector('#next-stop');

function* trainGenerator(trainStops){
    for(let trainStop of trainStops){
        yield `You have arrived to ${trainStop}`;
    }
    yield "We've made it!";
};



button.addEventListener('click', function(e){
    let myTrainGenerator = trainGenerator(stops).next();
    if (myTrainGenerator.done){
        button.disabled = true;
    } else {
        console.log(myTrainGenerator.value);
    }
    
})