// axios = require('axios');

// const url="http://localhost:3022/classB/team";

// const table={
//     "team": "Class-B Middle Tier Service",
//     "membersNames": [
//     "Swaroop S Jadhav",
//     "Srilakshman Srinivasan",
//     "T Sai Amith",
//     "Harishankar V"
//     ]
// };

// describe("Get all team members", () => {
//     it("succeeds", async() => {
//         const response=await axios.get(url);
//         expect(response.data).toBeTruthy();
//     })
// })

// describe("Get all team members", () => {
//     it("succeeds", async() => {
//         const response=await axios.get(url);
//         expect(response.status).toEqual(200);
//     })
// })

// describe("Handle invalid url", () => {
//     it("succeeds", async() => {
//         try {
//             const response=await axios.get(url+"-1");
//             fail("This is an invalid URL");
//         }
//         catch(err) {
//             expect(err.response.status).toEqual(404);
//         }
//     })
// })

const ClassBRestController = require('../../src/service/classb-restcontroller');
const axios = require('axios');
const axiosMockAdapter = require('axios-mock-adapter');

 

describe('ClassBRestController', () => {
  let api;
  let axiosMockInstance;

 

  beforeAll(() => {
    api = new ClassBRestController();
    axiosMockInstance = new axiosMockAdapter(axios);
  });

 

  afterAll(() => {
    axiosMockInstance.restore();
  });

 

  describe('getAllBooks', () => {
    it('should return books data for a valid location', async () => {
      axiosMockInstance.onGet('http://localhost:3034/classB/books/all/US-NC').reply(200, { data: 'books data' });
      const req = { params: { location: 'US-NC' } };
      const res = { status: jasmine.createSpy().and.returnValue({ json: jasmine.createSpy() }) };

 

      await api.getAllBooks(req, res);

 

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.status().json).toHaveBeenCalledWith({ data: 'books data' });
    });

 

    it('should return a 500 status for an error during API request', async () => {
      axiosMockInstance.onGet('http://localhost:3034/classB/books/all/US-NC').reply(500);
      const req = { params: { location: 'US-NC' } };
      const res = { status: jasmine.createSpy().and.returnValue({ json: jasmine.createSpy() }) };

 

      await api.getAllBooks(req, res);

 

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.status().json).toHaveBeenCalledWith({ error: 'An error occurred while fetching data from the API.' });
    });

 

    it('should return a 404 status for an invalid location', async () => {
      const req = { params: { location: 'Invalid' } };
      const res = { status: jasmine.createSpy().and.returnValue({ json: jasmine.createSpy() }) };

 

      await api.getAllBooks(req, res);

 

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.status().json).toHaveBeenCalledWith({ error: 'An error occurred while fetching data from the API - Invalid Location' });
    });
  });

 

  describe('getAllDvds', () => {
    it('should return DVDs data for a valid location', async () => {
      axiosMockInstance.onGet('http://localhost:3035/classB/dvd/all/US-NC').reply(200, { data: 'DVDs data' });
      const req = { params: { location: 'US-NC' } };
      const res = { status: jasmine.createSpy().and.returnValue({ json: jasmine.createSpy() }) };

 

      await api.getAllDvds(req, res);

 

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.status().json).toHaveBeenCalledWith({ data: 'DVDs data' });
    });

 

    it('should return a 500 status for an error during API request', async () => {
      axiosMockInstance.onGet('http://3.26.113.102:3034/books/all/US-NC').reply(404);
      const req = { params: { location: 'US-NC' } };
      const res = { status: jasmine.createSpy().and.returnValue({ json: jasmine.createSpy() }) };

 

      await api.getAllDvds(req, res);

 

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.status().json).toHaveBeenCalledWith({ error: 'An error occurred while fetching data from the API.' });
    });

 

    it('should return a 404 status for an invalid location', async () => {
      const req = { params: { location: 'Invalid' } };
      const res = { status: jasmine.createSpy().and.returnValue({ json: jasmine.createSpy() }) };

 

      await api.getAllDvds(req, res);

 

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.status().json).toHaveBeenCalledWith({ error: 'An error occurred while fetching data from the API - Invalid Location' });
    });
  });

 

  describe('getAllLaptops', () => {
    it('should return books data for a valid location', async () => {
        axiosMockInstance.onGet('http://localhost:3036/classB/laptops/all/US-NC').reply(200, { data: 'books data' });
        const req = { params: { location: 'US-NC' } };
        const res = { status: jasmine.createSpy().and.returnValue({ json: jasmine.createSpy() }) };

        await api.getAllBooks(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.status().json).toHaveBeenCalledWith({ data: 'books data' });
      });

      it('should return a 500 status for an error during API request', async () => {
        axiosMockInstance.onGet('http://localhost:3036/classB/laptops/all/US-NC').reply(500);
        const req = { params: { location: 'US-NC' } };
        const res = { status: jasmine.createSpy().and.returnValue({ json: jasmine.createSpy() }) };

        await api.getAllBooks(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.status().json).toHaveBeenCalledWith({ error: 'An error occurred while fetching data from the API.' });
      });

      it('should return a 404 status for an invalid location', async () => {
        const req = { params: { location: 'Invalid' } };
        const res = { status: jasmine.createSpy().and.returnValue({ json: jasmine.createSpy() }) };

        await api.getAllBooks(req, res);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.status().json).toHaveBeenCalledWith({ error: 'An error occurred while fetching data from the API - Invalid Location' });
      });
  });

 

  describe('getBooksTeam', () => {
    it('should return books data for a valid location', async () => {
        axiosMockInstance.onGet('http://localhost:3034/classB/books/team').reply(200, { data: 'books data' });
        const req = { params: { location: 'US-NC' } };
        const res = { status: jasmine.createSpy().and.returnValue({ json: jasmine.createSpy() }) };

        await api.getAllBooks(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.status().json).toHaveBeenCalledWith({ data: 'books data' });
      });

      it('should return a 500 status for an error during API request', async () => {
        axiosMockInstance.onGet('http://localhost:3034/classB/books/team').reply(500);
        const req = { params: { location: 'US-NC' } };
        const res = { status: jasmine.createSpy().and.returnValue({ json: jasmine.createSpy() }) };

        await api.getAllBooks(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.status().json).toHaveBeenCalledWith({ error: 'An error occurred while fetching data from the API.' });
      });

      it('should return a 404 status for an invalid location', async () => {
        const req = { params: { location: 'Invalid' } };
        const res = { status: jasmine.createSpy().and.returnValue({ json: jasmine.createSpy() }) };

        await api.getAllBooks(req, res);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.status().json).toHaveBeenCalledWith({ error: 'An error occurred while fetching data from the API - Invalid Location' });
      });
  });

 

  describe('getDvdsTeam', () => {
    it('should return books data for a valid location', async () => {
        axiosMockInstance.onGet('http://localhost:3035/classB/dvds/team').reply(200, { data: 'books data' });
        const req = { params: { location: 'US-NC' } };
        const res = { status: jasmine.createSpy().and.returnValue({ json: jasmine.createSpy() }) };

        await api.getAllBooks(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.status().json).toHaveBeenCalledWith({ data: 'books data' });
      });

      it('should return a 500 status for an error during API request', async () => {
        axiosMockInstance.onGet('http://localhost:3035/classB/dvds/team').reply(500);
        const req = { params: { location: 'US-NC' } };
        const res = { status: jasmine.createSpy().and.returnValue({ json: jasmine.createSpy() }) };

        await api.getAllBooks(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.status().json).toHaveBeenCalledWith({ error: 'An error occurred while fetching data from the API.' });
      });

      it('should return a 404 status for an invalid location', async () => {
        const req = { params: { location: 'Invalid' } };
        const res = { status: jasmine.createSpy().and.returnValue({ json: jasmine.createSpy() }) };

        await api.getAllBooks(req, res);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.status().json).toHaveBeenCalledWith({ error: 'An error occurred while fetching data from the API - Invalid Location' });
      });
  });

 

  describe('getLaptopsTeam', () => {
    it('should return books data for a valid location', async () => {
        axiosMockInstance.onGet('http://3.27.66.195:3036/laptops/team').reply(200, { data: 'books data' });
        const req = { params: { location: 'US-NC' } };
        const res = { status: jasmine.createSpy().and.returnValue({ json: jasmine.createSpy() }) };

        await api.getAllBooks(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.status().json).toHaveBeenCalledWith({ data: 'books data' });
      });

      it('should return a 500 status for an error during API request', async () => {
        axiosMockInstance.onGet('http://localhost:3036/classB/laptops/team').reply(500);
        const req = { params: { location: 'US-NC' } };
        const res = { status: jasmine.createSpy().and.returnValue({ json: jasmine.createSpy() }) };

        await api.getAllBooks(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.status().json).toHaveBeenCalledWith({ error: 'An error occurred while fetching data from the API.' });
      });

      it('should return a 404 status for an invalid location', async () => {
        const req = { params: { location: 'Invalid' } };
        const res = { status: jasmine.createSpy().and.returnValue({ json: jasmine.createSpy() }) };

        await api.getAllBooks(req, res);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.status().json).toHaveBeenCalledWith({ error: 'An error occurred while fetching data from the API - Invalid Location' });
      });
  });

 

  describe('getClassBTeam', () => {
    it('should return team data from a file', async () => {
      const teamData = [{ name: 'Team Class B' }];
      spyOn(api, 'fs').and.returnValue({
        readFileSync: jasmine.createSpy().and.returnValue(JSON.stringify(teamData)),
      });
      const req = {};
      const res = { setHeader: jasmine.createSpy(), end: jasmine.createSpy() };

 

      api.getClassBTeam(req, res);

 

      expect(res.setHeader).toHaveBeenCalledWith('content-type', 'application/json');
      expect(res.end).toHaveBeenCalledWith(JSON.stringify(teamData));
    });

 

    it('should return a 500 status for an error while reading team data', async () => {
      spyOn(api, 'fs').and.returnValue({
        readFileSync: jasmine.createSpy().and.throwError('File read error'),
      });
      const req = {};
      const res = { status: jasmine.createSpy().and.returnValue({ json: jasmine.createSpy() }) };

 

      api.getClassBTeam(req, res);

 

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.status().json).toHaveBeenCalledWith({ error: 'An error occurred while fetching data from the API.' });
    });
  });
});