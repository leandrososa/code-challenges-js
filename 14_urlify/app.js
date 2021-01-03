'use strict';

const myURL = "This is great!!!, or not???"

function urlify(string){
    return string.replace(/[^a-z0-9]+/gi, '-').toLowerCase();
}

console.log(urlify(myURL));