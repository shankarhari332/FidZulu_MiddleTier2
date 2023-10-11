const express = require('express');

// Set up routing for class B services
function router(controller) {
    const router = express.Router();
    router.get('/books', controller.getAllContacts.bind(controller));
    router.get('/dvds', controller.getContact.bind(controller));
    router.get('/laptops', controller.addContact.bind(controller));
    return router;
}

module.exports = router;
