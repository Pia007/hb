// Write a function called hasMoreVowels that takes in one argument, word. When the function is called, return true if that word contains more vowels than non-vowels; otherwise, return false. The word will always be a single word, without any punctuation or spaces. It will contain only uppercase and/or lowercase letters.

// If the phrase is over half vowels, it should return true:

// hasMoreVowels('moose')
    // true
// If it’s half vowels (or less), it’s false:

// hasMoreVowels('mice')
 // false

// hasMoreVowels('graph')
 // false
// Don’t consider “y” as a vowel:

// hasMoreVowels('yay')
 // false
// Uppercase vowels are still vowels:

// hasMoreVowels('Aal')
 // true

//* Write your code here
    //^ take a str and determine if it has more vowels than non-vowels, return a boolean
    //^ define variables to store the number of vowels and non-vowels
    //^ loop through the str and count the vowels and non-vowels, as long as the index is less than the length of the str
        //^ if the current index is a vowel, if it is, add 1 to the vowels variable
            //^ use the || operator to check str against each vowel
        //^ otherwise add 1 to the non-vowels variable
    //^ if the vowels variable is greater than the non-vowels variable, return true
    //^ otherwise return false


const hasMoreVowels = (word) => {
    let vowels = 0;
    let consonants = 0;
    let lowerCase = word.toLowerCase();

    for (let i = 0; i < word.length; i++) {
        if (lowerCase[i] === 'a' || lowerCase[i] === 'e' || lowerCase[i] === 'i' || lowerCase[i] === 'o' || lowerCase[i] === 'u') {
            vowels++;
        } else {
            consonants++;
        }
    }
    if (vowels > consonants) {
        return true;
    }
    // } else {
    //     return false;
    // }
    return false;
}

console.log(hasMoreVowels('moose'));
console.log(hasMoreVowels('mice'));
console.log(hasMoreVowels('graph'));
console.log(hasMoreVowels('yay'));
console.log(hasMoreVowels('Aal'));


// Jeddy solution
const hasMoreVowelsTwo = (word) => {

    let lowerCaseWord = word.toLowerCase();
    let vowelsArr = ['a', 'e', 'i', 'o', 'u'];
    let vowels = 0;
    let vowelMajority = lowerCaseWord.length/2;

    for (let i = 0; i < lowerCaseWord.length; i++) {
        if (vowelsArr.includes(lowerCaseWord[i])) {
            vowels++;
        }
        if(vowels > vowelMajority) {
            return true;
        }
    }

    return false;

}

console.log(hasMoreVowelsTwo('moose'));
console.log(hasMoreVowelsTwo('mice'));
console.log(hasMoreVowelsTwo('graph'));
console.log(hasMoreVowelsTwo('yay'));
console.log(hasMoreVowelsTwo('Aal'));
