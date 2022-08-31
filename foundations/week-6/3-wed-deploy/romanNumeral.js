/*

Write a function in romanNumerals.js that converts an integer (<= 1,000) to its Roman numeral equivalent.

For reference, these are the building blocks for how we encode numbers with Roman numerals:

Decimal

Roman

1 is I

5 is V

10 is X

50 is L

100 is C

500 is D

1,000 is M

For example:

toRoman(5)
'V'

toRoman(267)
'CCLXVII'
Important: You should convert to “old-school Roman numerals”, where subtraction isn’t used. So, for exmple, 4 is “IIII” and 9 is “VIIII”. You may be more used to a different style, where subtraction is used, as 4 would be “IV” and 9 would be “IX”. This is not what we want here (though it’s a good, but much harder challenge).

For example:

toRoman(99)
'LXXXXVIIII'

*/

const toRoman = (num) => {

    //* check if num is less than 1 or greater than 1000
    if (num < 1 || num >= 1000) {
        return 'Enter a number between 1 and 999';
    }; 

    //* define a variable to hold the Roman numeral
    let roman = '';

    //* define a variable to hold num converted to a string
    let numToString = String(num);

    //* declare an object to hold the Roman numeral key value pairs
    const romanNumerals = {
        1: 'I',
        5: 'V',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D'
    };

    //? if the string length is 3, 
        //*convert the first index of the string to an interger and set it to the current value
        //? current is greater than or equal to 5 
            //^ add the value of romanNumerals key 500 to the roman variable
            //^ subtract 5 from the current interger
        //* iterate over the current integer
            //^ as long as the index is > 0 
                //^ add the value of romanNumerals key 100 to the roman variable
                //^ subtract 1 from the current interger
        //* set the string to the last 2 characters of the string
    if (numToString.length === 3) {
        let curr = parseInt(numToString[0]);
        if (curr => 5) {
            roman += romanNumerals[500];
            curr -= 5;
        }
        for (let i = curr; i > 0; i--) {
            roman += romanNumerals[100];
        }
        numToString = numToString.slice(-2);
    };

    //? if the string length is 2
        //* convert the first index of the string to an interger and set it to the current value
        //? current is greater than or equal to 5
            //^ add the value of romanNumerals key 50 to the roman variable
            //^ subtract 5 from the current interger
        //* iterate over the current integer
            //^ as long as the index is > 0
                //^ add the value of romanNumerals key 10 to the roman variable
                //^ subtract 1 from the current interger
        //* set the string to the last character of the string

    if (numToString.length === 2) {
        let curr = parseInt(numToString[0]);
        if (curr => 5) {
            roman += romanNumerals[50];
            curr -= 5;
        };
        for (let i = curr; i > 0; i--) {
            roman += romanNumerals[10];
        };
        numToString = numToString.slice(-1);
    };

    //? if the string length is 1
        //* convert the first index of the string to an interger and set it to the current value
        //? current is greater than or equal to 5
            //^ add the value of romanNumerals key 5 to the roman variable
            //^ subtract 5 from the current interger
        //* iterate over the current integer
            //^ as long as the index is > 0
                //^ add the value of romanNumerals key 1 to the roman variable


    if (numToString.length === 1) {
        let curr = parseInt(numToString[0]);
        if (curr >= 5) {
            roman += romanNumerals[5];
            curr -= 5;
        };
        for (let i = curr; i > 0; i--) {
            roman += romanNumerals[1];
        };
    };

    //* return the roman numeral
    return `${num} is ${roman}`;
}


console.log(toRoman(5));
console.log(toRoman(4));
console.log(toRoman(9));
console.log(toRoman(267));
console.log(toRoman(99));
console.log(toRoman(999));
console.log(toRoman(1000));
console.log(toRoman(1001));



//* Extra: write a function that converts a number to a roman numeral without using subtraction
const toRome = (num) => {
    let romanNumeral = '';
    let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    for (let i = 0; i < decimal.length; i++) {
        while (num >= decimal[i]) {
        romanNumeral += roman[i];
        num -= decimal[i];
        }
    }
    // return romanNumeral;
    return `${num} is ${romanNumeral}`;
}

console.log(toRome(5));
console.log(toRome(4));
console.log(toRome(9));
console.log(toRome(267));
console.log(toRome(99));
console.log(toRome(999));
console.log(toRome(1000));
console.log(toRome(1001));


//* Drue Solution - much better 
const toRomanBetter = (num) => {
    if (num > 9999) { return 'Too Big'; }
    if (num < 1) { return 'Too Small'; }
    if (num === 0) { return '0 is Nulla'; }

    let roman = '';

    while (num >= 1000) {
        roman += 'M';
        num -= 1000;
    }

    while (num >= 100) {
        roman += 'C';
        num -= 100;
    }

    while (num >= 10) {
        roman += 'X';
        num -= 10;
    }

    while (num >= 5) {
        roman += 'V';
        num -= 5;
    }

    while (num >= 1) {
        roman += 'I';
        num -= 1;
    }

    return `${num} is ${roman}`;
}

console.log(toRomanBetter(5));
console.log(toRomanBetter(4));
console.log(toRomanBetter(9));
console.log(toRomanBetter(267));
console.log(toRomanBetter(99));
console.log(toRomanBetter(-999));
console.log(toRomanBetter(99999));
console.log(toRomanBetter(0));
