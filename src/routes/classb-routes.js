const express = require('express');

// Set up routing for class B services
function router(controller) {
    const router = express.Router();
    router.get('/classB/books/all/:location', controller.getAllBooks.bind(controller));
    router.get('/classB/dvds/all/:location', controller.getAllDvds.bind(controller));
    router.get('/classB/laptops/all/:location', controller.getAllLaptops.bind(controller));
    router.get('/classB/books/team', controller.getBooksTeam.bind(controller));
    router.get('/classB/dvds/team', controller.getDvdsTeam.bind(controller));
    router.get('/classB/laptops/team', controller.getLaptopsTeam.bind(controller));
    router.get('/classB/team', controller.getClassBTeam.bind(controller));
    return router;
}

module.exports = router;
