// Set Up 1: import express and cors from 'express' and 'cors'
const express = require('express');
const cors = require('cors');

// Set Up 2: instantiate express app
const app = express();

// Set Up 3: configure app to use json and cors
app.use(express.json());
app.use(cors());

// Set Up 8: import the controller, destructure it
const {
    getMovies,
    deleteMovie,
    createMovie,
    updateMovie
} = require('./controller')

// Set Up 9: Write endpoints, using the destructured callback from the controller.js file
app.get('/api/movies', getMovies);
app.delete('/api/movies/:id', deleteMovie);
app.post('/api/movies/', createMovie);
app.put('/api/movies/:id', updateMovie);




// Set Up 4: assign port to a variable
const SERVER_POINT = 4004

// Set Up 5:configure app to listen on port
app.listen(4004, () => console.log(`Listening on ${SERVER_POINT}`));