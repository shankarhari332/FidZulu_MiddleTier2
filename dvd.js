const axios = require('axios');
const express = require('express');
const app = express();
const port = 3022;

app.get('classB/dvd/status', async (req, res) => {
  res.json({ status: 'Service is up and running' });
});

app.get('/classB/dvd/all/US-NC', async (req, res) => {
  try {
    //Change api after getting from backend
    const apiResponse = await axios.get('https://reqres.in/api/users?page=1');
    res.status(200).json(apiResponse.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data from the API.' });
  }
});

app.get('/classB/dvd/all/IE', async (req, res) => {
  try {
    //Change api after getting from backend
    const apiResponse = await axios.get('https://reqres.in/api/users?page=2');
    res.status(200).json(apiResponse.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data from the API.' });
  }
});

app.get('/classB/dvd/all/IN', async (req, res) => {
  try {
    //Change api after getting from backend
    const apiResponse = await axios.get('https://reqres.in/api/users?page=3');
    res.status(200).json(apiResponse.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data from the API.' });
  }
});

app.get('/classB/dvd/team', async (req, res) => {
  try {
    //Change api after getting from backend
    const apiResponse = await axios.get('https://reqres.in/api/users?page=1');
    res.status(200).json(apiResponse.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data from the API.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
