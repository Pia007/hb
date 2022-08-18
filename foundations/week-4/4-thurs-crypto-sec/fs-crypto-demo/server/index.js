// SET UP 1:  import dependencies
const express = require('express');
const cors = require('cors');

// SET UP 2: invoke express and assign it to app
const app = express();


// SET UP 3: middleware - executes each time the server is used
app.use(express.json());
app.use(cors());


// SET UP 8: import functions from msg controller via destructuring
const { createMessage } = require('./messageController.js');

// SET UP 9: build out the endpoints, pass in URL and callback

// creating msg
app.post('/api/messages', createMessage);

// SET UP 4:  Listen on a desired port, start the server

const SERVER_PORT = 4004;

app.listen( SERVER_PORT, () => {
    console.log(`Server is running on ${SERVER_PORT}`)
})