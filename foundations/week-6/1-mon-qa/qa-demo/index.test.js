 const {
    formatTitle, 
    shortenBio, 
    convertLength
} = require('./public/utils')

// testData object is used for consistency and prevents influencing the original data
let testData = {
    id: 1,
    firstName: "Patten",
    lastName: "Goforth",
    bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    datetime: "2022-03-14 8:00:00",
    title: "nulla ac",
    length: 65,
    floor: 5,
    roomNumber: 3
  }

  // Let's write a basic test fo familiarize ouselves with Jest syntax
  // text() takes 2 args - string and callback
test('Check to see if Jest works', () => {
  expect(2).toBe(2);
});


//Lets try accessing out fake data
test('Check to see if fake data firstName is Patten', () => {
  expect(testData.firstName).toBe('Patten');
});

// Describe block to test the actual functions we've imported 
  // describe block helps with grouping tests together
  // Testing out the formatTitle functionality
describe('Testing our the formatTitle function', () => {
  
  // Lets check to see if fomatTitle actually retruns a string
  test('formatTitle should return a string', () => {
    
    // lets store the return of formatTitle in a variable
    let formattedTitle = formatTitle(testData.title);

    //note typeof returns data type of wrapped in quote, aka a string.
    expect(typeof formattedTitle).toBe("string");
  });


  // lets check to see if the title actually gets capitalized
  test('formatTitle should capitalize our title', () => {
    let formattedTitle = formatTitle(testData.title);

    expect(formattedTitle).toBe("Nulla Ac");

  }) 
});

// toEqual and toBe are not the same - differnce?
   // Datatypes - refernced types are equated differently than primitive types.
    // toBe is used to compare primitive types
    // toEqual works on both primitive and reference types (objects and arrays)
test('toBe vs toEqual', () => {
  const obj1 = {num: 1};
  const obj2 = {num: 1};
  // expect(obj1).toBe(obj2);    // this is going to fail be toBe does not check for values
  expect(obj1).toEqual(obj2);   // this is going to pass because toEqual both types

  // therefore it is good practice to use toEqual to prevent accidently comparing data types

});

// Testing out the shortenBio functionality
describe('shortenBio tests', () => {
  // check to see if the bio is actually shortened by using toBelessThan()
  test('shortenBio should shorten the bio string', () => {
    let shortenedBio = shortenBio(testData.bio);

    expect(shortenedBio.length).toBeLessThan(testData.bio.length);
  });


  //Although it's not the best solutin, the ellipsis(...) should be present when the bio is shortened
  // We can check that using the toContain() method

  test('shortenBio shoulf add periods to the end of the string', () => {
    //We can check that usig the toContain() method
    test('shortenBio should add periods to the end of the string', () => {
      let shortenedBio = shortenBio(testData.bio);

      expect(shortenedBio).toContain("...");
    });
  });
});


// Testing out the convertLength functionality
describe('convertLengthe tests', () => {
  // the length of a converted datetime should be 2
  test('convertLength should return an array with length to 2', () => {
    let result = convertLength(testData.length);

    expect(result).toHaveLength(2);
  });

  // The function should still beable to handle time under 60
  test('convertLength can handle numbers under 60', () => {
    let result = convertLength(30);

    expect(result[1]).toEqual(30);

  });
});



