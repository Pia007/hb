/*

Instructions:

Create a new test file called functions.test.js.

Open functions.test.js.

Require functions.js at the top.

Create a test for returnTwo:

This test should expect returnTwo() to equal 2.

Create a test for greeting:

This test should expect greeting('James') to equal "Hello, James.".

This test should expect greeting('Jill') to equal "Hello, Jill.".

Create a test for add:

This test should expect add(1, 2) to equal 3.

This test should expect add(5, 9) to equal 14.

*/

const {
    returnTwo, 
    greeting, 
    add,
    multiply,
    divide,
    subtract
} = require('./functions.js')



test('Should return 2', () => { 
    expect(returnTwo()).toBe(2);
});


test('Should return "Hello,  + name."', () => {
    expect(greeting('Jill')).toEqual("Hello, Jill.");
});


test('This test is adding num1  + num2. Should equal num1 + num2 ', () => {
    expect(add(5, 9)).toEqual(14);
});


describe('Testing Math Functions', () => {

    // checking the multiply function
    test('This test is multiplying num1 by num2. Should equal num1 * num2', () => {
        expect(multiply(5, 9)).toEqual(45);
    });

    // checking the divide function
    test('This test is dividing num1 by num2. Should equal num1 / num2', () => {
        expect(divide(5, 9)).toEqual(0.5555555555555556);
    });

    // checking the subtract function
    test('This test is subtracting num1 from num2. Should equal num1 - num2', () => {
        expect(subtract(5, 9)).toEqual(-4);
    });


    // additional test to check for number of args, data type and truthyness
     // check data type of arguments
    test('This test is checking the data type of arguments. Should be a number', () => {
        
        // let num1 = 'b';  fails
        let num1 = 5;
        let num2 = 9;
        expect(typeof num1).toEqual('number');
    });

    //what if a falsey value is passed in?
    test('This test is checking if arguments are false. Should true', () => {
        // let num1 = 'b';  fails
        let num1 = 5;
        let num2 = 9;
        expect(num1 === Number(num1)).toEqual(true);
    });

    // check if number of args is 2
    test('This test is checking if there are the appropriate number of args. The number of args should be 2', () => {
        
        let args = [5, 9];
        // let args = [5]; fails
        // let args = [5, 9, 10]; fails
    
        let numberOfArgs = args.length;
    
        expect(numberOfArgs).toEqual(2);
    });
    
});




