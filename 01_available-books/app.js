'use strict';

class Book {
    constructor(title, author, isbn, numCopies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.numCopies = numCopies;
    }

    //Getter for number of copies
    get availability() {
        return this.getAvailability;
    }

    getAvailability() {
        if (this.numCopies == 0) {
            return `${this.title} is out of stock. No copies left.`

        } else if (this.numCopies < 10) {
            return `${this.title} is low on stock. ${this.numCopies} copies left.`
        }
        return `${this.title} is in stock. ${this.numCopies} copies left.`
    }

    sell(numSold = 1) {
        this.numCopies = this.numCopies - numSold;
    }

    restock(numCopies = 5) {
        this.numCopies = this.numCopies + numCopies;
    }

}

let artOfWar = new Book('The Art of War', 'Sun Tzu', 1599869772, 5);

console.log('Current availability of the book:');
console.log(artOfWar.availability());

console.log('Selling 3 copies of the book. Then rechecking availability.');
artOfWar.sell(5);
console.log(artOfWar.availability());

console.log('Adquiring 20 copies of the book. And rechecking availability once again.');
artOfWar.restock(20);
console.log(artOfWar.availability());