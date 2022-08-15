//* Created server folder and server.js file
//* confirmed that nodemon is installed globlally and working
  //* note: npm install -g nodemon, bc it is already installed globally will not see it in the package.json file

//console.log('Hello World');

//* 1 install requirments
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

//* 2 app listen on a particular port
const SERVER_PORT = 5050;


//* 4 ENDPOINTS? Check index.html and index.js from the client folder for reference

//^ Create an array of inventory items
const inventory = ['webcam', 'eyeglasses', 'computer', 'water bottle', 'chair', 'mouse', 'monitor', 'conditioner', 'keyboard', 'desk'
];

//1 create an endpoint to handle get requests to inventory and sends back an array. 3 now ant this to be able to handle query for a particular item
app.get('/api/inventory', (req, res) => {
  // this will display in the terminal in vsc after clicking button in browser
  console.log('In the "api/inventory" endpoint callback');

  // query for a particular item
  console.log(req.query);

  if (req.query.item) {
    const item = req.query.item.toLowerCase();
    const filteredItems = inventory.filter(invItem => invItem.toLowerCase().includes(item));
    res.status(200).send(filteredItems);
  } else {
    res.status(200).send(inventory);
  }
  // note that using includes allow for searching of partial strings and an empty string will return all of the items in the array

  // send all inventory to the FE in a response
  // res.status(200).send(inventory);
});

//2 create a get request to search the inventory based on index value from dropdown
app.get('/api/inventory/:index', (req, res) => {
  console.log('In the "api/inventory/:index" endpoint callback');
  // will see the obj with key:index ex {index: '7'}
  console.log(req.params)
  
  // or just get the index or value
  console.log(req.params.index)

  // note can hav multiple params for example '/api/inventory/:index/:id/'
  
  // need to store the index so that it can be send back in the res
  const index = Number(req.params.index);

  res.status(200).send(inventory[index]);

});









//* 3 call the listen method, 2 arg - port #, callback
app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`));

// console.log('This is the benefit of using nodemon');

