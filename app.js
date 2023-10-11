// axios=require('axios');
// express=require('express');
// const port = process.env.PORT || 3032;
// app=express();
// result;

// function makeGetRequest(path) {
//     axios.get(path).then(
//         (response) => {
//             result = response.data;
//         },
//         (error) => {
//             result=error.response.stat;
//             console.log(error);
//         }
//     );
// }

// app.listen(port, () => {
//     console.log("Server Listening on PORT:", port);
//   });

//   app.get('/status', (request, response) => {
//     if(result==null)
//         response.send()
//     response.send(result);
//  });

// // makeGetRequest('https://reqres.in/api/users?page=21');
// makeGetRequest('lol');

const axios = require('axios');
const express = require('express');
const app = express();
const port = 3022;

app.get('classB/status', async(req,res) => {
        res.json({ status: 'Service is up and running' });
});

//Change service name and location according to requirements
app.get('/classB/serviceName/all/location', async (req, res) => {
  try {
    //Change api according to endpoint
    const apiResponse = await axios.get('https://reqres.in/api/users?page=2');
    res.status(200).json(apiResponse.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data from the API.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
