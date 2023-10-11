axios = require('axios');

const url="http://localhost:3022/classB/team";

const table={
    "team": "Class-B Middle Tier Service",
    "membersNames": [
    "Swaroop S Jadhav",
    "Srilakshman Srinivasan",
    "T Sai Amith",
    "Harishankar V"
    ]
};

describe("Get all team members", () => {
    it("succeeds", async() => {
        const response=await axios.get(url);
        expect(response.data).toBeTruthy();
    })
})

describe("Get all team members", () => {
    it("succeeds", async() => {
        const response=await axios.get(url);
        expect(response.status).toEqual(200);
    })
})

describe("Handle invalid url", () => {
    it("succeeds", async() => {
        try {
            const response=await axios.get(url+"-1");
            fail("This is an invalid URL");
        }
        catch(err) {
            expect(err.response.status).toEqual(404);
        }
    })
})