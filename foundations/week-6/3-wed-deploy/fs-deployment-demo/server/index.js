const express = require('express');

// this is built into node
   // allows use of file paths in a cert
const path = require('path');

const app = express();

// define out routes

app.get('/', function (req, res) {      // can put (req, res) => {}
    res.sendFile(path.join(__dirname, '../index.html'));
});


// port to listen on
// This will get the port variable from Heroku if it exists, otherwise use port 4005
const port = process.env.PORT || 4005;


app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
});

//DELETED SOLUTION FOLDER



