////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE
//^ The callbacks
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

// * use + short hand to check to see if num1 and num2 are numbers or can be made into numbers
// ! if it cannot convert to a number, it will return NaN
    //? use boolean && to make sure that both are true

const calculator = (num1, num2, callback) => {
    if (+num1 && +num2) {
        num1 = +num1
        num2 = +num2

        //? Use the callback to perform the calculations
        return callback(num1, num2)
    } else {
        console.log('you need to send in numbers')
    }
}

// Todo: Test the calculator
const result = calculator(1,2,add);
const subtractResult = calculator(121, 69, subtract);
const otherResult = calculator(3,4,multiply);
const divideResult = calculator(100, 25, divide);

// Todo: print the results
console.log(`This is the addition result: ${result}`);
console.log(`This is the subtraction result: ${subtractResult}`);
console.log(`This is the multiplication result: ${otherResult}`);
console.log(`This is the division result: ${divideResult}`);

console.log("-----------");