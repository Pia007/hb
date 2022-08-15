//*1 Import dependencies 
const express = require('express');
const cors = require('cors');

// *2 define variable to init express server commands
const app = express();

// *3 configure the server to use JSOB objects and cors pkg
app.use(express.json());
app.use(cors());

// *4 define a variable for the port num
const SERVER_PORT = 4000;


//^6 Create endpoint and method to handle sending friends array back to the client
app.get('/api/users', (req, res) => {
    const myFriends = ['Sophie', 'Michelle', 'Shay', 'Fruity', 'Shrek'];
    console.log(`This is the "api/users' endpoint callback from lab.`)
    res.status(200).send(myFriends);
});

//^7 Create an endpoint that will tell us the weather for today. The temp is a param 
    //^ test it at http://localhost:4000/weather/hot and http://localhost:4000/weather/cold
app.get('/weather/:temp', (req, res) => {
    console.log(req.params);
    const {temp} = req.params;
    const phrase = `<h3>The temperature was ${temp} today</h3>.`;
    res.status(200).send(phrase);
})


// *5 configure the server to listen on the port
app.listen(SERVER_PORT,() => console.log(`Listening on ${SERVER_PORT}`))