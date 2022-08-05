// TODO Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.

//^ For example:

// isPalindrome("a")
    // returns true

// isPalindrome("noon")
    // returns true

// isPalindrome("hello")
    // returns false

// ^Treat spaces and uppercase letters normally—so “Racecar” wouldn’t be a palindrome since “R” and “r” aren’t the same letter:

// IsPalindrome("Racecar")
    // returns false

// isPalindrome("racecar")
    // returns true


// Write your code below

//? palidrome = word that is spelled the same backwards and forwards
//! spaces and uppercase letters normally will be treated as false
    //TODO: Define a function takes 1 arg
        //^ split, reverse and rejoin the arg
        //^ compare the reversed arg to the original arg
            //* return statement will return true or false

const isPalindrome = (word) => {
    let reversedWord = word.split('').reverse().join('');
    return reversedWord === word;
};

console.log(isPalindrome('racecar'));
console.log(isPalindrome('Racecar'));
console.log(isPalindrome('a'));
console.log(isPalindrome('hello'));
console.log(isPalindrome('noon'));


// Solution

// function palindrome(word) {
//     let j = word.length -1;

//     for (let i = 0; i < (word.length -1) /2 ; i++) {
//         if(word[i] !== word[j]) {
//             return false;
//         }
//         j--;
//     }
//     return true;
// }
