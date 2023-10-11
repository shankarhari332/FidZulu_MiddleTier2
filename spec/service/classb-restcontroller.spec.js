// const ClassBRestController = require('../../src/service/classb-restcontroller');

// console.error = arg => {}

// const testDvds = [
//     {
//         "productId": 4001,
//         "productName": "Inception",
//         "productDescription": "A mind-bending science fiction thriller directed by Christopher Nolan.",
//         "price": 16.1892,
//         "rating": 4.7,
//         "genre": "Science Fiction",
//         "director": "Christopher Nolan",
//         "format": "Blu-ray",
//         "runtime": "148 minutes",
//         "releaseYear": 2010,
//         "imageUrl": "https://example.com/dvds/4001"
//         },
//         {
//         "productId": 4002,
//         "productName": "The Matrix",
//         "productDescription": "A classic cyberpunk action film directed by the Wachowskis.",
//         "price": 14.029200000000001,
//         "rating": 4.5,
//         "genre": "Science Fiction",
//         "director": "The Wachowskis",
//         "format": "DVD",
//         "runtime": "136 minutes",
//         "releaseYear": 1999,
//         "imageUrl": "https://example.com/dvds/4002"
//         }
// ];

// describe('RESTful controller unit tests for Dvd operations:', () => {
//     let controller;
//     let mockDao;
//     let mockHttpResponse;

//     beforeEach(() => {
//         mockDao = jasmine.createSpyObj('mockDao', ['queryForAllDvds']);

//         controller = new ClassBRestController();
//         controller.productDao = mockDao;

//         mockHttpResponse = jasmine.createSpyObj('mockHttpResponse', ['status', 'json']);

//         // The mock status() method needs to return a reference to the 
//         // mock response so it can be chained with other calls:
//         //    res.status(500).json(...)
//         mockHttpResponse.status.and.returnValue(mockHttpResponse);
//     });

//     describe('retrieve all widgets', () => {
//         it('succeeds', () => {
//             mockDao.queryForAllWidgets.and.returnValue(testWidgets);
//             const req = { };

//             controller.getAllWidgets(req, mockHttpResponse);
        
//             expect(mockHttpResponse.json).toHaveBeenCalledOnceWith(testWidgets);
//         });

//         it('fails due to a DAO exception', () => {
//             mockDao.queryForAllWidgets.and.throwError('error');
//             const req = { };

//             controller.getAllWidgets(req, mockHttpResponse);
                
//             expect(mockHttpResponse.status).toHaveBeenCalledOnceWith(500);

//             // We could test whether send() was called, but we don't really
//             // care about the body of the response as long as the status is 500.
//             // A best practice is to keep "white box" testing (that is, tests that
//             // depend on the implementation of a method) to a minimum.
//         });
//     });