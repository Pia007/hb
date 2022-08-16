/* 
Write a function to remove all duplciate letters from a provided string. The string will only contain lowercase letters between a - z. The string will not contain spaces.

For example:

>>> makeUnique('helloworld')
    helowrd

>>> makeUnique('iwanttoclimbamountain')
    iwantoclmbu
*/

//* define a funtion
    // * it will only take a string as an argument
        // * string must only contain lowercase letters between a - z, and no spaces
            //* .toLowerCase() 
            //* .split(' ')
            //* .join('')
        // * loop through the string
            //* if current letter is an unique string 
                //? index -1 
                //* add the letter to the unique string
        // * return the unique string
                

const makeUnique = (str) => {
    str = str.toLowerCase().split(' ').join('');
    console.log(str);

    //store the unique str
    let uniqueStr = '';

    //Loop over the string
    for ( let i = 0; i < str.length; i++) {
        //check if str[i] is in uniqueStr
        if (!uniqueStr.includes(str[i])) {
            // add str[i] to uniqueStr
            uniqueStr += str[i];
        }
    }
    return uniqueStr;
}


// Todo: Test Cases
console.log(makeUnique('helloWorld'));
console.log(makeUnique('HelLowor lDDD'));
console.log(makeUnique('iwanttoclimbamountain'));
console.log(makeUnique('Iwant to climb amountain today and just do it'));
console.log(makeUnique('WelcomeToTheFutuRE today the future is bright'));


// Another Solution - less efficient bc it loops over the string twice
// const unique = (str) => {
//     let strSet = new Set(str.toLowerCase().split('').join(''));
//     return [...strSet].join('');
// }

// console.log(unique('helloWorld'));
// console.log(unique('iwanttoclimbamountain'));



