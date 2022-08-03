// * Given a word, return true if that word contains only unique characters. Return false otherwise.
/* For example:

    hasUniqueChars("Monday")
        returns true
    hasUniqueChars("Moonday")
        returns false
    Uppercase and lowercase letters should be considered separately:

    hasUniqueChars("Bob")
    returns true
*/

//TODO declare a fx that takes a string
    // ? need to store a copy of the string 
        // ? new Set() will create a new copy but does not take in duplicates
    //* loop over the string, as long as the index is less than the length of the string
        //* if the copy contains str[i] then return false
            // ? Set.has() method returns a boolean based on whether or not a Set has a specified value
        //* otherwise, add the str[i] to the Set, strCopy
        //* increment i by 1
    //* return true


const hasUniqueChars = (str) => {
    let strCopy = new Set();
    for ( let i = 0; i < str.length; i++) {
        if(strCopy.has(str[i])) {
            return false;
        } else {
            strCopy.add(str[i]);
        }
    }
    return true;
}

console.log(hasUniqueChars("Monday"));
console.log(hasUniqueChars("Moonday"));
console.log(hasUniqueChars("Bob"));
console.log(hasUniqueChars("bob"));

console.log("------------");


// * Simplest solution
    //* initializes a set the automatically has the str
    //? used .size() method to compare the set to the str

const isUnique = (str) => {
    let uniqueSet = new Set(str);
    return uniqueSet.size === str.length;
}

console.log(isUnique("Monday"));
console.log(isUnique("Moonday"));
console.log(isUnique("Bob"));
console.log(isUnique("bob"));