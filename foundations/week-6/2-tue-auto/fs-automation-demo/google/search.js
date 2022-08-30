// Here we need to import By, which will allow us to use either css or xpath selectors in our code
const { By } = require('selenium-webdriver')

const search = async (driver, searchTerm) => {

    // We are starting with an await since we're dealing with promises and the browser
    // We have our automation find the element which we can then use the sendKeys method to type
    // into that element, and the \n to hit enter after typing the search term
    // finding a particular element and finding something by name 'q'
    // in google.com search bar using the inspector, locate the search input
        // the name attribute is a good way to grab the element 
            // name='q'
            // driver.findElement(By.name('q')) returns a selenium DOM element
            // sendKeys() automates typing 
            // \n is the enter key so that the search actually executes
        // then we wait for the results to show up
    await driver.findElement(By.name('q')).sendKeys(`${searchTerm}\n`)

    // We are then setting a variable to be the text from the results of our Google search
    // Instead of using the sendKeys method, we are using the getText method which will return 
    // the text in that element as a string
    // looking for a div with id res and getting all of the text in there
    let resultsText = await driver.findElement(By.id('res')).getText()

    // We make our restults lower case and then expect it to contain our original search term
    expect(resultsText.toLowerCase()).toContain(searchTerm.toLowerCase())
}

// export the search function
module.exports = {
    search
}