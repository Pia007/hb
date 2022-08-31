const { By } = require('selenium-webdriver');

// write a code that check to see it the movie was crossed off

const crossOffMovie = async (driver) => {
    
    // input a movie title
    await driver.findElement(By.xpath('//input')).sendKeys('Cross Off Movie');

    // add the movie click the first button
    await driver.findElement(By.xpath('//button')).click();
    
    // find and click on the movie title to cross off the movie
    await driver.findElement(By.xpath("//span[contains(text(), 'Cross Off Movie')]")).click();

    // check to see if the movie title has the class checked and assign it to a variable
    const crossedOff = await driver.findElement(By.xpath('//span[contains(@class, "checked")]'));

    // expectation

    expect(crossedOff).toBeTruthy();
}

module.exports = {
    crossOffMovie
};