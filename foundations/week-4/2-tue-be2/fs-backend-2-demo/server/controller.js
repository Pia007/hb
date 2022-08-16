// Setup 7 Setting up controllers - all callbacks will be written here an imported to the index.js and destructured

//import the database 
const movies = require('./db.json');
// define what the globalId should start at
let globalID = 11;

// adding the callbacks to the controller file
module.exports = {
    getMovies: (req, res) => {
        res.status(200).send(movies);
    },
    deleteMovie: (req, res) => {
        // define the id
        const id = Number(req.params.id);
        // find the index of the movie that has the id
        const index = movies.findIndex(elem => elem.id === id);
        // remove the movie
        movies.splice(index, 1);
        // send res containing movies array with that movie removed
        res.status(200).send(movies);
    },
    createMovie: (req, res) => {
        // test to see what is coming in
        
        // console.log(req.body);
        let {title, rating, imageURL } = req.body;
        const newMovie = {
            id: globalID,
            title,
            rating,
            imageURL
        };
        movies.push(newMovie);
        res.status(200).send(movies);
        
        // increment global id
        globalID++;
    },
    updateMovie: (req, res) => {
        // check to see what is coming in
        // console.log(req.params);
        // console.log(req.body);

        // set destructured id to requested param
        let { id } = req.params;

        // convert the id to a number
        id = Number(id);

        // get the type of rating
        const { type } = req.body;

        // get the movie based on id
        const index = movies.findIndex(elem => elem.id === id);

        if ( movies[index].rating === 5 && type === 'plus') {
            res.status(400).send(`Cannot go above 5.`)
        } else if ( movies[index].rating === 0 && type === 'minus'){
            res.status(400).send(`Cannot go below 0.`);
        } else if ( type === 'plus') {
            movies[index].rating++;
            res.status(200).send(movies);
        } else if ( type === 'minus') {
            movies[index].rating--;
            res.status(200).send(movies);
        } else {
            res.sendStatus(400);
        }
        // res.status(200).send(movies);
    },
}