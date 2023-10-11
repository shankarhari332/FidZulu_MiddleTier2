const express = require('express');

const axios = require('axios');


// TODO delete the "require" of the DAO module
const ProductDao = require('../dao/mock-classb-dao');

class ClassBRestController {
    constructor() { 
        this.port = process.env.PORT || 3022;
        this.backendApiUrl = "h";

        // TODO Delete the creation of the DAO
        this.productDao = new ProductDao();

        this.app = express();

        this.app.use(express.json());

        
        const router = express.Router();
        router.get('/books', this.getAllBooks.bind(this));
        router.get('/dvds', this.getAllDvds.bind(this));
        router.get('/laptops', this.getAllLaptops.bind(this));
        
        router.options('/restart', this.restart.bind(this));
        router.options('/stop', this.stop.bind(this));

        this.app.use('/', router);
    }

    start() {
        this.app.listen(this.port, 
            () => console.log(`Service for Class B products listening on port ${this.port}`))
    }


    getAllBooks(req, res) {
        try {
            // TODO Replace the call to the DAO method with an HTTP request
            //      to the back-end API. Your code may look like this:
            //          const backEndResp = ...
            //          const contacts = backEndResp.data;
            // HINT Axios functions all return Promises, so you'll need to 'await'
            //      each Axios function call.
            // HINT Remember to add 'async' to the enclosing method definition.
            // HINT See slide 8-18
            const books = this.ProductDao.getAllBooks();

            res.json(books);
        }
        catch (err) {
            console.error(`error on GET books: ${err}`);
            res.status(500).json({error: err});
        }
    }

    getAllDvds(req, res) {
        try {
            // TODO Replace the call to the DAO method with an HTTP request
            //      to the back-end API. Your code may look like this:
            //          const backEndResp = ...
            //          const contacts = backEndResp.data;
            // HINT Axios functions all return Promises, so you'll need to 'await'
            //      each Axios function call.
            // HINT Remember to add 'async' to the enclosing method definition.
            // HINT See slide 8-18
            const dvds = this.ProductDao.getAllDvds();

            res.json(dvds);
        }
        catch (err) {
            console.error(`error on GET dvds: ${err}`);
            res.status(500).json({error: err});
        }
    }

    getAllLaptops(req, res) {
        try {
            // TODO Replace the call to the DAO method with an HTTP request
            //      to the back-end API. Your code may look like this:
            //          const backEndResp = ...
            //          const contacts = backEndResp.data;
            // HINT Axios functions all return Promises, so you'll need to 'await'
            //      each Axios function call.
            // HINT Remember to add 'async' to the enclosing method definition.
            // HINT See slide 8-18
            const laptops = this.ProductDao.getAllLaptops();

            res.json(laptops);
        }
        catch (err) {
            console.error(`error on GET laptops: ${err}`);
            res.status(500).json({error: err});
        }
    }

    stop(req, res) {
        try {
            // TODO Replace the call to the DAO method with the following HTTP request
            //      to the back-end API:
            //          await axios.options(this.backendApiUrl + '/shutdown');
            this.contactDao.shutdown();

            if (res) {
                res.sendStatus(204);
            }
        }
        catch (err) {
            console.error(`error shutting down: ${err}`);
            res.status(500).json({error: err});
        }
    }

    /* 
     * Our test cases will use restart to restore the mock database
     * to its initial state before each spec.
     */
    restart(req, res) {
        // TODO Replace the call to the DAO method with the following HTTP request
        //      to the back-end API:
        //          await axios.options(this.backendApiUrl + '/restart');
        this.productDao = new ProductDao();

        res.sendStatus(204);
    }
}

module.exports = ProductsRestController;

if (require.main === module) {
    const api = new ProductsRestControllerRestController();
    api.start();
}