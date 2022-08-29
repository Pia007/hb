/*

Instructions:

Create a functions.js file.

Use module.exports to export an object.

Add a new property to the object called returnTwo:

returnTwo should be a function that returns the integer 2.

Add a new property to the object called greeting:

greeting should be a function with a name parameter.

greeting should return "Hello, name." where name is the value of the name parameter.

Add a new property to the object called add:

add should be a function with a num1 and num2 parameter.

add should return the sum of num1 and num2.

Challenge: 
    Add a new function for multiply, divide, and subtract:

All these functions should follow the same structure as the add function.

Open functions.test.js.

Add a new test case for multiply, divide, and subtract:

All these tests should follow the same structure as the add test case.

Use whatever numbers you like, but include two ``expect``s.

Group the add, multiply, divide, and subtract test cases using describe.

You will want to go look up the jest documentation to learn the correct syntax for a describe block.

Call this group Math functions.

*/

module.exports = {
    returnTwo: () => {
        return 2;
    },
    greeting: (name) => {
        return 'Hello, '+ name + ".";
    },
    add: (num1, num2) => {
        return num1 + num2;
    },
    multiply: (num1, num2) => {
        return num1 * num2;
    },
    divide: (num1, num2) => {
        return num1 / num2;
    },
    subtract: (num1, num2) => {
        return num1 - num2;
    }
};