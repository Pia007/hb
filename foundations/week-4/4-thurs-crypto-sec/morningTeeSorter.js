/*

Write a function that will take in a string containing only s, m, and l characters. Ex: slsmmsllsmsmlmsls

This string essentially represents a bunch of t-shirts in an unsorted pile. Your function should return this pile of t-shirts sorted by small, then medium, then large. The above example would be returned sssssssmmmmmlllll.

The given string will never include characters outside of the lowercase s, m, and l. The string will also never contain any spaces.

>>> tshirtSorter('lms')
    sml

>>> tshirtSorter('smllms')
    ssmmll

*/

// *declare funtion that takes in a string
    //^vaiable hold all of the charcters that are the same
    //^ loop through the string 
        //? check if the index is equal to particular character
            //* truthy - add it to the variable holding that particular character
        //^ otherwise if - check another character
        //^ otherwise  add the index to the last character to check
    //* return the string in size order

// Solution with Mandy
const tshirtSorter = (str) => {
    strArr = str.split("");

    let newOrder = strArr.filter(char => char === 's').join("") + strArr.filter(char => char === 'm').join("") + strArr.filter(char => char === 'l').join("")
    
    return newOrder;
}

// TODO TEST CASE
console.log(tshirtSorter('sml'));
console.log(tshirtSorter('ssmmll'));
console.log(tshirtSorter('lms'));
console.log(tshirtSorter('smllms'));
console.log(tshirtSorter('slsmmsllsmsmlmsls'));
console.log(tshirtSorter('smlslsmmsllsmsmlmsls'));

console.log("-------------");

// My Solution
const teeOne = (str) => {
    let small = '';
    let med = '';
    let lg = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 's') {
            small += 's';
        } else if ( str[i] === 'm') {
            med += 'm';
        } else {
            lg += 'l';
        }
    }
    return small + med + lg;
}

// TODO TEST CASE

console.log(teeOne('sml'));
console.log(teeOne('ssmmll'));
console.log(teeOne('lms'));
console.log(teeOne('smllms'));
console.log(teeOne('slsmmsllsmsmlmsls'));
console.log(teeOne('smlslsmmsllsmsmlmsls'));

console.log("-------------");


// Mandy Solution - most efficient solution
const teeTwo = (str) => {
    return str.split("").sort().reverse().join("");
}

console.log(teeTwo('sml'));
console.log(teeTwo('ssmmll'));
console.log(teeTwo('lms'));
console.log(teeTwo('smllms'));
console.log(teeTwo('slsmmsllsmsmlmsls'));
console.log(teeTwo('smlslsmmsllsmsmlmsls'));