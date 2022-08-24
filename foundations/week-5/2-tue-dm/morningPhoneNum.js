/*

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example:

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don’t forget the space after the closing parentheses!

*/

//* Function
    //^ arr --> phone number (123) 456-7890
    //* methods to turn array into string
        //* join()
        //* substring() method extracts characters from start to end (exclusive)
        //* concatenation
    //? What if there were contraints
        //^ arr length < 10 or > 10
        //^ arr index is <0 or > 9
        //^ arr index is a letter


const createPhoneNumber = (arr) => {
    // regex to check if arr index is a number, 0-9, and length is 10
    let regEx =/^\d{10}$/;

    // easier this way
    if(regEx.test(arr.join(''))){
        return `(${arr.slice(0,3).join('')}) ${arr.slice(3,6).join('')}-${arr.slice(6,10).join('')}`;
    } else {
        return 'Invalid input';
    }

    // What I had and realized that I don't need the conditions other than the regex

    // for (let i = 0; i < arr.length; i++){
    //     if ( arr.length !== 10 || arr[i] < 0 || arr[i] > 9 || regEx.test(arr.join('')) === false) {
    //         return 'Invalid input';
    //     } else {
    //         return `(${arr.slice(0,3).join('')}) ${arr.slice(3,6).join('')}-${arr.slice(6,10).join('')}`;
    //     }
    // }

    //without contraints
    
    // let phoneNumber = `(${arr.join('').substring(0,3)}) ${arr.join('').substring(3, 6)}-${arr.join('').substring(6, 10)}`;
    // return phoneNumber;
}

    



console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // (123) 456-7890
console.log(createPhoneNumber([9, 7, 3, 2, 3, 4, 5, 6, 7, 8])); // (973) 234-5678
console.log(createPhoneNumber([9, 7, 3, 2, 3, 22, 5, 6, 7, 8])); // (973) 232-5678
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 9, 0, 1]));  // Invalid input
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 9, 0, 1, 13, 15]));  // Invalid input
console.log(createPhoneNumber([1, 2, 3, 4, 5, 'b', 9, 0, 1, 0])); // invalid input