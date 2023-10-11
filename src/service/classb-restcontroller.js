
const express = require('express');

const axios = require('axios');

class ClassBRestController {
    constructor() { 
        this.port = 3022;

        this.app = express();

        this.app.use(express.json());

        
        const router = express.Router();
        router.get('/classB/books/all/:location', this.getAllBooks.bind(this));
        router.get('/classB/dvds/all/:location', this.getAllDvds.bind(this));
        router.get('/classB/laptops/all/:location', this.getAllLaptops.bind(this));

        router.get('/classB/books/team', this.getBooksTeam.bind(this));
        router.get('/classB/dvds/team', this.getDvdsTeam.bind(this));
        router.get('/classB/laptops/team', this.getLaptopsTeam.bind(this));
        router.get('/classB/team', this.getClassBTeam.bind(this));

        this.app.use('/', router);
    }

    start() {
        this.app.listen(this.port, 
            () => console.log(`Service for Class B products listening on port ${this.port}`))
    }


    async getAllBooks(req, res) {
        const param = req.params.location;

        if(param == "US-NC" || param == "IN" || param == "IRE"){
            
            try {
                const apiResponse = await axios.get('http://localhost:3034/dvd/all/' + param);
                res.status(200).json(apiResponse.data);
              } catch (error) {
                res.status(500).json({ error: 'An error occurred while fetching data from the API.' });
              }
    }
    else{
        let msg = "Wrong location";
        res.status(404).json({ error: 'An error occurred while fetching data from the API - Invalid Location' });
    }
}

    async getAllDvds(req, res) {
        const param = req.params.location;

        if(param == "US-NC" || param == "IN" || param == "IRE"){
            
            try {
                const apiResponse = await axios.get('http://localhost:3035/dvd/all/' + param);
                res.status(200).json(apiResponse.data);
              } catch (error) {
                res.status(500).json({ error: 'An error occurred while fetching data from the API.' });
              }
    }
    else{
        let msg = "Wrong location";
        res.status(404).json({ error: 'An error occurred while fetching data from the API - Invalid Location' });
    }
              }

    async getAllLaptops(req, res) {
        
        const param = req.params.location;

        if(param == "US-NC" || param == "IN" || param == "IRE"){
            
            try {
                const apiResponse = await axios.get('http://localhost:3036/dvd/all/' + param);
                res.status(200).json(apiResponse.data);
              } catch (error) {
                res.status(500).json({ error: 'An error occurred while fetching data from the API.' });
              }
    }
    else{
        let msg = "Wrong location";
        res.status(404).json({ error: 'An error occurred while fetching data from the API - Invalid Location' });
    }

    }

    async getBooksTeam(req, res){
        try {
            const apiResponse = await axios.get('http://localhost:3034/dvd/team');
            res.status(200).json(apiResponse.data);
          } catch (error) {
            res.status(500).json({ error: 'An error occurred while fetching data from the API.' });
          }
    }

    async getDvdsTeam(req, res){
       
        try {
            const apiResponse = await axios.get('http://localhost:3035/dvd/team');
            res.status(200).json(apiResponse.data);
          } catch (error) {
            res.status(500).json({ error: 'An error occurred while fetching data from the API.' });
          }
    }

    async getLaptopsTeam(req, res){
        
        try {
            const apiResponse = await axios.get('http://localhost:3036/dvd/team');
            res.status(200).json(apiResponse.data);
          } catch (error) {
            res.status(500).json({ error: 'An error occurred while fetching data from the API.' });
          }
    }

    getClassBTeam(req, res){

        const classBFile = `data/team.json`;
        const fs = require('fs');

        const teamDetails = fs.readFileSync(classBFile, 'utf-8');
        let teamData = JSON.parse(teamDetails);

        try {
            const apiResponse = JSON.stringify(teamData);
            res.setHeader('content-type', 'application/json');
            res.end(JSON.stringify(apiResponse));
          } catch (error) {
            res.status(500).json({ error: 'An error occurred while fetching data from the API.' });
          }
    }
}

module.exports = ClassBRestController;

if (require.main === module) {
    const api = new ClassBRestController();
    api.start();
}