/**
 * Test DAO for CRUD operations on Class B services - books, laptops, DVDs.
 */

const fs = require('fs');

const booksFile = `data/books.json`;
const laptopsFile = `data/laptops.json`;
const DvdsFile = `data/dvds.json`;

class ProductDao {
    constructor() {
        // read mock data from JSON file
        const bookContents = fs.readFileSync(booksFile, 'utf-8');
        this.books = JSON.parse(bookContents);

        const laptopContents = fs.readFileSync(laptopsFile, 'utf-8');
        this.laptops = JSON.parse(laptopContents);

        const dvdContents = fs.readFileSync(DvdsFile, 'utf-8');
        this.dvds = JSON.parse(dvdContents);
    }

    queryForAllBooks() {
        return this.books;
    }

    queryForAllLaptops() {
        return this.laptops;
    }

    queryForAllDvds() {
        return this.dvds;
    }
}

module.exports = ProductDao;
