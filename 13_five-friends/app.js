'use strict';

const apiURL = 'https://randomuser.me/api/?results=5'
let pictures = document.querySelector('#pictures');

async function postData(url = '') {
    const response = await fetch(url);
    return response.json();
}
  
postData(apiURL, { answer: 42 }).then(data => {
    console.log(data.results);
    for (let person of data.results){
        let picture = document.createElement('img');
        picture.src = person.picture.large;
        pictures.appendChild(picture);
    }
});