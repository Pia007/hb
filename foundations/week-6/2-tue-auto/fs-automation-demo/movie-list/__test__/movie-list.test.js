jest.setTimeout(10000);

const { Builder, Capabilities } = require("selenium-webdriver");

require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

const { addMovie } = require('./addMovie');

beforeAll(async () => {
    await driver.get('http:127.0.0.1:3000/movie-list/index.html')
})

afterAll(async () => {
    await driver.quit();
});

test('Add a movie', async () => {
    await addMovie(driver);

    await driver.sleep(5000);
});
