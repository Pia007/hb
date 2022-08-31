jest.setTimeout(18000000);


// destructure dependencies from selenium webdriver
const { Builder, Capabilities } = require('selenium-webdriver');
const { deleteMovie } = require('./deleteMovie');
const { crossOffMovie} = require('./crossOffMovie');
const { displayMessage } = require('./displayMessage');

// chromedriver
require('chromedriver');

// create a new webdriver instance
const driver = new Builder().withCapabilities(Capabilities.chrome()).build();


// run before all tests
beforeAll(async () => {
    await driver.get('http:127.0.0.1:3000/movieList/index.html');
});



// write test functions here
test('Delete a movie', async () => {

    await deleteMovie(driver);

    await driver.sleep(5000);

});

test ('Cross off a movie', async () => {
    
        await crossOffMovie(driver);
    
        await driver.sleep(5000);
    
});

test ('Display a message', async () => {
        
    await displayMessage(driver);

    await driver.sleep(5000);
        
});

// run after all tests
afterAll(async () => {
    await driver.quit();
});