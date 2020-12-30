'use strict';

function Movie(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
}

Movie.prototype.getOverview = function() {
    return `${this.title}, a ${this.genre} movie directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`;
}

const ManFromEarth = new Movie('The Man from Earth', 'Richard Schenkman', 'sci fi', 2007, 7.5);

console.log(ManFromEarth.getOverview());