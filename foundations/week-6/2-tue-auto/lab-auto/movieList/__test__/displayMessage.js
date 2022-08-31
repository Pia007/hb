const { By } = require('selenium-webdriver');


// write a code that checks to see if a message is display when a movie is crossed off or deleted

const displayMessage = async (driver) => {

    // input a movie title
    await driver.findElement(By.xpath('//input')).sendKeys('Another Movie');

    // Find the delete button 
    await driver.findElement(By.xpath('//button')).click();

    //find and cross off the movie
    await driver.findElement(By.xpath("//span[contains(text(), 'Another Movie')]")).click();

    // assign the crosse off message to a variable
    let crossMessage = await driver.findElement(By.xpath('//aside'));

    // use the isDisplayed method to check if the crossed message displayed
    const crossed = crossMessage.isDisplayed();

    // delete the movie
    await driver.findElement(By.id('AnotherMovie')).click();


    // find the aside element that displays the deleted message
    let deleteMessage = await driver.findElement(By.xpath('//aside'));
    
    //  use the isDisplayed method to check if the message  displayed
    const deleted = deleteMessage.isDisplayed();
    
    //expected not to be displayed
    expect(crossMessage).toBeTruthy();
    expect(deleted).toBeTruthy();
}

module.exports = {
    displayMessage
}