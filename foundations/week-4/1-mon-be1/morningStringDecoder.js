/* In this challenge, you’ll write a decoder.

Write a function that takes in a string and returns a string. A valid argument is a number followed by a sequence of letters. Ex. 2fcjjm

The number in the string represents how many characters each letter should shift. For example: 

Examples:

>>> "1a" // "b"
>>> "3ce" // "fh"
>>> "2fcjjm" // "hello"


Jeddy Tip for this question...

Characters in JS have what is called an ASCII (American Standard Code for Information Interchange, pronounced as-kee) code, which is a way to encode the basic 128 characters. These codes can be added to, subtracted to, etc. just like regular numbers. This will help us "add" our decoder value to our letters.

Why do we need to do this? Well remember string concatenation. A number of 2 plus a string of "abc" will return us "2abc", not "cdf".

    We know the first character in our string is a number, so let's type coerce it into a number datatype.
    Create a solution string to add letters to one-by-one.
    Let's write a for loop to go through our string.
    We will start on the index of 1 because the index of 0 is our number we use to decipher.
    
    Capture the ascii code for the given letter, plus the value of the decipher.
    let strValue = code[i].charCodeAt() + decipher
    
    Translate the ascii value back to a character and add it to the solution string..
    solution += String.fromCharCode(strValue)

    Return the solution string.

*/



const decode = (code) => {
    
    let decipher = Number(code[0]);
    let solution = "";
    for (let i = 1; i < code.length; i++) {
        let strValue = code[i].charCodeAt() + decipher;
        solution += String.fromCharCode(strValue);
    }
    return solution;
}


console.log(decode("1a"));
console.log(decode("3ce"));
console.log(decode("2fcjjm"));