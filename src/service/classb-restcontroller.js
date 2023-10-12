
const express = require('express');

const axios = require('axios');

class ClassBRestController {

  fail = 0;
  maxFail = 3;
  status = false;

  booksUrl = 'http://3.26.113.102:3034/books/all/';
  dvdsUrl = 'http://52.65.114.103:3035/dvd/all/';
  laptopsUrl = 'http://3.27.66.195:3036/laptops/all/';

  booksTeamUrl = 'http://3.26.113.102:3034/books/team';
  dvdsTeamUrl = 'http://52.65.114.103:3035/dvd/team';
  laptopsTeamUrl = 'http://3.27.66.195:3036/laptops/team';

  //Change url in line 156 and prot numbersin 179,181 and 183

  constructor() {
    this.port = 3022;
    this.app = express();
    this.app.use(express.json());

    var cors = require("cors");
    this.app.use(cors());

    const router = express.Router();
    router.get('/classB/books/all/:location', this.getAllBooks.bind(this));
    router.get('/classB/dvds/all/:location', this.getAllDvds.bind(this));
    router.get('/classB/laptops/all/:location', this.getAllLaptops.bind(this));

    router.get('/classB/books/team', this.getBooksTeam.bind(this));
    router.get('/classB/dvds/team', this.getDvdsTeam.bind(this));
    router.get('/classB/laptops/team', this.getLaptopsTeam.bind(this));
    router.get('/classB/all/team', this.getClassBTeam.bind(this));

    router.post('/classB/:servicename/all/location', this.postClassB.bind(this));

    this.app.use('/', router);
  }

  start() {
    this.app.listen(this.port,
      () => console.log(`Service for Class B products listening on port ${this.port}`))
  }


  async getAllBooks(req, res) {
    const param = req.params.location;
    const classBFile = `data/books.json`;
    const fs = require('fs');
    for (let i = 1; i <= 3; i++) {
      if (param == "US-NC" || param == "IN" || param == "IE") {
        try {
          const apiResponse = await axios.get(this.booksUrl + param);
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
          res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
          res.setHeader('Access-Control-Allow-Credentials', true);
          res.status(200).json(apiResponse.data);
          break;
        } catch (error) {
          this.fail++;
          console.log("This is fail #" + this.fail);
          // res.status(500).json({ error: 'An error occurred while fetching data from the API.' });
        }
        if (this.fail >= this.maxFail) {
          this.fail = 0;
          const teamDetails = fs.readFileSync(classBFile, 'utf-8');
          let teamData = JSON.parse(teamDetails);
          try {
            const apiResponse = JSON.stringify(teamData);
            res.setHeader('content-type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
            res.setHeader('Access-Control-Allow-Credentials', true);
            res.end(JSON.stringify(apiResponse));
          } catch (error) {
            res.status(500).json({ error: 'An error occurred while fetching data from the API.' });
          }
        }
      }
      else {
        let msg = "Wrong location";
        res.status(404).json({ error: 'An error occurred while fetching data from the API - Invalid Location' });
      }
    }
  }

  async getAllDvds(req, res) {
    const param = req.params.location;
    const classBFile = `data/dvds.json`;
    const fs = require('fs');
    for (let i = 1; i <= 3; i++) {
      if (param == "US-NC" || param == "IN" || param == "IE") {
        try {
          const apiResponse = await axios.get(dvdsUrl + param);
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
          res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
          res.setHeader('Access-Control-Allow-Credentials', true);
          res.status(200).json(apiResponse.data);
          break;
        } catch (error) {
          this.fail++;
          console.log("This is fail #" + this.fail);
          // res.status(500).json({ error: 'An error occurred while fetching data from the API.' });
        }
        if (this.fail >= this.maxFail) {
          this.fail = 0;
          const teamDetails = fs.readFileSync(classBFile, 'utf-8');
          let teamData = JSON.parse(teamDetails);
          try {
            const apiResponse = teamData;
            res.setHeader('content-type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
            res.setHeader('Access-Control-Allow-Credentials', true);
            res.end(JSON.stringify(apiResponse));
          } catch (error) {
            res.status(500).json({ error: 'An error occurred while fetching data from the API.' });
          }
        }
      }
      else {
        let msg = "Wrong location";
        res.status(404).json({ error: 'An error occurred while fetching data from the API - Invalid Location' });
      }
    }
  }

  async getAllLaptops(req, res) {
    const param = req.params.location;
    const classBFile = `data/laptops.json`;
    const fs = require('fs');
    for (let i = 1; i <= 3; i++) {
      if (param == "US-NC" || param == "IN" || param == "IE") {
        try {
          const apiResponse = await axios.get(this.laptopsUrl + param);
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
          res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
          res.setHeader('Access-Control-Allow-Credentials', true);
          res.status(200).json(apiResponse.data);
          break;
        } catch (error) {
          this.fail++;
          console.log("This is fail #" + this.fail);
          // res.status(500).json({ error: 'An error occurred while fetching data from the API.' });
        }
        if (this.fail >= this.maxFail) {
          this.fail = 0;
          const teamDetails = fs.readFileSync(classBFile, 'utf-8');
          let teamData = JSON.parse(teamDetails);
          try {
            const apiResponse = JSON.stringify(teamData);
            res.setHeader('content-type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
            res.setHeader('Access-Control-Allow-Credentials', true);
            res.end(JSON.stringify(apiResponse));
          } catch (error) {
            res.status(500).json({ error: 'An error occurred while fetching data from the API.' });
          }
        }
      }
      else {
        let msg = "Wrong location";
        res.status(404).json({ error: 'An error occurred while fetching data from the API - Invalid Location' });
      }
    }
  }

  async getBooksTeam(req, res) {
    const classBFile = `data/booksteam.json`;
    const fs = require('fs');
    for (let i = 1; i <= 3; i++) {
      try {
        const apiResponse = await axios.get(this.booksTeamUrl);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.status(200).json(apiResponse.data);
        break;
      } catch (error) {
        this.fail++;
        console.log("This is fail #" + this.fail);
        // res.status(500).json({ error: 'An error occurred while fetching data from the API.' });
      }
    }
    if (this.fail >= this.maxFail) {
      this.fail = 0;
      const teamDetails = fs.readFileSync(classBFile, 'utf-8');
      let teamData = JSON.parse(teamDetails);
      try {
        const apiResponse = JSON.stringify(teamData);
        res.setHeader('content-type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.end(JSON.stringify(apiResponse));
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching data from the API.' });
      }
    }
  }

  async getDvdsTeam(req, res) {
    const classBFile = `data/dvdsteam.json`;
    const fs = require('fs');
    for (let i = 1; i <= 3; i++) {
      try {
        const apiResponse = await axios.get(this.dvdsTeamUrl);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.status(200).json(apiResponse.data);
        break;
      } catch (error) {
        this.fail++;
        console.log("This is fail #" + this.fail);
        // res.status(500).json({ error: 'An error occurred while fetching data from the API.' });
      }
    }
    if (this.fail >= this.maxFail) {
      this.fail = 0;
      const teamDetails = fs.readFileSync(classBFile, 'utf-8');
      let teamData = JSON.parse(teamDetails);
      try {
        const apiResponse = JSON.stringify(teamData);
        res.setHeader('content-type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.end(JSON.stringify(apiResponse));
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching data from the API.' });
      }
    }
  }

  async getLaptopsTeam(req, res) {
    const classBFile = `data/laptopteam.json`;
    const fs = require('fs');
    for (let i = 1; i <= 3; i++) {
      try {
        const apiResponse = await axios.get(this.laptopsTeamUrl);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.status(200).json(apiResponse.data);
        break;
      } catch (error) {
        this.fail++;
        console.log("This is fail #" + this.fail);
      }
    }
    if (this.fail >= this.maxFail) {
      this.fail = 0;
      const teamDetails = fs.readFileSync(classBFile, 'utf-8');
      let teamData = JSON.parse(teamDetails);
      try {
        const apiResponse = JSON.stringify(teamData);
        res.setHeader('content-type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.end(JSON.stringify(apiResponse));
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching data from the API.' });
      }
    }
  }

  getClassBTeam(req, res) {

    const classBFile = `data/team.json`;
    const fs = require('fs');

    const teamDetails = fs.readFileSync(classBFile, 'utf-8');
    let teamData = JSON.parse(teamDetails);

    try {
      const apiResponse =teamData;
      res.setHeader('content-type', 'application/json');
      res.end(JSON.stringify(apiResponse));
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching data from the API.' });
    }
  }

  async postClassB(req, res) {
    try {
      const serviceName = req.params.servicename;
      if (!req.body) {
        return res.status(400).json({ error: 'Bad Request: Missing data in the request.' });
      }

      const response = await axios.post(`http://localhost:${getServicePort(serviceName)}/location`, req.body);

      if (!response || !response.data) {
        return res.status(500).json({ error: 'Invalid response from the backend server.' });
      }

      res.json(response.data);
    } catch (error) {
      console.error(error);

      if (error.code === 'ECONNREFUSED') {
        res.status(500).json({ error: 'Backend server is unreachable.' });
      } else if (error.code === 'ETIMEDOUT') {
        res.status(500).json({ error: 'Request to the backend server timed out.' });
      } else {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  }

  getServicePort(servicename) {
    switch (servicename) {
      case 'Books':
        return 3034;
      case 'Food':
        return 3035;
      case 'Toys':
        return 3036;
      default:
        return 0;
    }
  }
}

module.exports = ClassBRestController;

if (require.main === module) {
  const api = new ClassBRestController();
  api.start();
}
