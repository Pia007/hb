const { By } = require('selenium-webdriver');

// write code to delete a movie from the list

const deleteMovie = async (driver) => {

    // input a movie title
    await driver.findElement(By.xpath(`//input`)).sendKeys('Hidden Figures');

    // add the movie click the first button
    await driver.findElement(By.xpath(`//button`)).click()

    //find the element that would display the movie title
    let movieTitle = await driver.findElement(By.xpath(`//span[contains(text(), 'Hidden Figures')]`));

    // find and click the delete button
    await driver.findElement(By.id('HiddenFigures')).click();
    
    //expected not to be displayed
    expect(movieTitle).not.toBe(true);
    
}

module.exports = {
    deleteMovie
};