/* In this challenge, you’ll write a decoder function. The function should take in a string and return a string.

Start by creating a function called decoder that has a single parameter called code.

Each code will be a sequence of numbers and letters, always starting with a number and ending with a letter(s).

Each number tells you how many characters to skip before finding a good letter. After each good letter should come the next next number.

For example, the string ‘hey’ could be encoded to ‘0h2xce5ngbrdy’. This means ‘skip 0, find the ‘h’, skip 2, find the ‘e’, skip 5, find the ‘y’.

So, if we passed ‘0h2xce5ngbrdy’ into your function, we should get ‘hey’ as a result.

Here are a few more examples:

'0h2xce5ngbrdy' => 'hey'
'3vdfn' => 'n'
'0r' => 'r'
'2bna0p1mp2osl0e' => 'apple'
'0y4akjfe0s' => 'yes'

*/

//Todo: Define the function decoder
    //^ The code will be a string of numbers and letters
    //^ The function should return a string
        //* declare a variable to hold the string that will be returned
        //? For loop or while loop? While Loop
            //* define i for the loop
            //* while i is less than the length of the code
                //? if i is a number?
                    //~ declare a variable to hold the number
                     //? how do I get the number from the code
                        //* look for methods that extract numbers from strings indices
                            //* parseInt()
                    //? how to check if the number is a number?
                        //? isNaN(), to check if the number at the current index is a number
                    //? if the number is a number,
                        //^ move the result forward by the number, then add the next good letter to the result
                        //^ increment i by 1 
                    //! otherwise,
                       //^ set i to the number plus 1    
            //* return the result string


const decoder = (code) => {
    let result = '';
    // While loop
    let i = 0;
    while ( i < code.length) {
        let num = parseInt(code[i])
        // console.log(`This is code[i]: `, code[i])
        if (isNaN(num)) {
            result += code[i];
            console.log(`Current string : `, result)
            i++;
        } else {
            i += num + 1;
        }
    }
    return `Final string is: ${result}`;
}


// Todo: Test Cases
console.log(decoder('0h2xce5ngbrdy'));
console.log(decoder('3vdfn'));
console.log(decoder('0r'));
console.log(decoder('2bna0p1mp2osl0e'));
console.log(decoder('0y4akjfe0s'));
console.log(decoder('0b2xco5ngbrdy'));
console.log(decoder('0m2xca5ngbrdn'));