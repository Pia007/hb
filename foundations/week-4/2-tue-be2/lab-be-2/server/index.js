// import express and cors
const express = require('express');
const cors = require('cors');

// create the express app
const app = express();

// enable cors and json parsing
app.use(express.json());
app.use(cors());

// import the houses data
const ctrl = require('./controller');

// destructure callbacks from the controller
const {
    getHouses,
    createHouse,
    updateHouse,
    deleteHouse
} = ctrl;

// endpoints
app.get('/api/houses', getHouses);
app.post('/api/houses', createHouse);
app.put('/api/houses/:id', updateHouse);
app.delete('/api/houses/:id', deleteHouse);

// set the port
const SERVER_PORT = 4004;

// start the server
app.listen(4004, () => {
    console.log(`Server is running on port ${SERVER_PORT}`);
});