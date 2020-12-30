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

class TechnicalBook extends Book {
    constructor(title, author, isbn, numCopies, edition) {
        super(title, author, isbn, numCopies);
        this.edition = edition;
    }

    getEdition() {
        return `The current version of this book is ${this.edition}`
    }
}

let GridSystems = new TechnicalBook('Grid Systems', 'Josef Müller-Brockmann', 3721201450, 6, 3);

console.log(GridSystems.getEdition());