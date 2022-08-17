/*

Given a string, return true or false depending on whether that string has balanced parentheses.

For the purposes of this problem, you only need to worry about parentheses ( and ), not other opening-and-closing marks, like curly brackets, square brackets, or angle brackets.

For example:

>>> has_balanced_par("()")
true

>>> has_balanced_par("(Oh Noes!)(")
    false

>>> has_balanced_par("((There's a bonus open paren here.)")
    false

>>> has_balanced_par(")")
    false

>>> has_balanced_par("(")
    false

>>> has_balanced_par("(This has (too many closes.) ) )")
    false

You may consider a string with no parentheses balanced:

>>> has_balanced_par("Hey...there are no par here!")
    true

*/

//* hasBalancedPar 
    //? how to check each type of parentheses () 
    //? how to ct the occurences of each type
        //^ need to define a variable to hold each count
    //* iterate through the string and check each character
        //? if value of str[i] is open par
            //* incr open ct, ++
        //? otherwise if value of str[i] is close par
            //* incr close ct, ++
    //? if open ct is equal to close ct
        //*return the boolean value    
        
// does not account for cases where closed parentheses come first
const hasBalancedPar = (str) => {
    let openPar = 0;
    let closedPar = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            openPar++;
        } else if (str[i] === ')') {
            closedPar++;
        }
    }
    return openPar === closedPar;
}



// TODO: TEST CASES

console.log(hasBalancedPar('()'));
console.log(hasBalancedPar('(Oh Noes!)('));
console.log(hasBalancedPar('((There\'s a bonus open paren here.)'));
console.log(hasBalancedPar(')'));
console.log(hasBalancedPar('('));
console.log(hasBalancedPar('(This has (too many closes.) ) )'));
console.log(hasBalancedPar('Hey...there are no par here!'));
console.log(hasBalancedPar('))))(((('));
console.log(hasBalancedPar('))))(((('));

console.log('--------------');

// Drue Solution - accounts for cases where closed parentheses come first
const balPar = (str) => {
    const openPar = [];

    for( let char of str) {
        if ( char === '(') {
            openPar.push(char);
        } else if ( char === ')') {
            if (openPar.length === 0) {
                return false;
            } else {
                openPar.pop();
            }
        }
    }
    return openPar.length === 0;
}

// TODO: TEST CASES
console.log(balPar('()'));
console.log(balPar('(Oh Noes!)('));
console.log(balPar('((There\'s a bonus open paren here.)'));
console.log(balPar(')'));
console.log(balPar('('));
console.log(balPar('(This has (too many closes.) ) )'));
console.log(balPar('Hey...there are no par here!'));
console.log(balPar('))))(((('));
console.log(balPar('))))(((('));

console.log('--------------');


// Drue Solution - accounts for curly brackets and square brackets
const balBrackets = (str) => {

    const openers = ['(', '[', '{'];
    const closers = [')', ']', '}'];
    const lookup = { '(': ')', '[': ']', '{': '}' };
    const stack = [];

    for( let char of str) {
        if ( openers.includes(char) ) {
            stack.push(char);
        } else if ( closers.includes(char) ) {
            if ( stack.length === 0) {
                return false;
            }
        }
        const lastOpen = stack.pop();    
        
        if (lookup[lastOpen] !== char) {
            return false;
        }   
    }   
}

console.log(balBrackets('()'));
console.log(balBrackets('(Oh Noes!)('));
console.log(balBrackets('((There\'s a bonus open paren here.)'));
console.log(balBrackets(')'));
console.log(balBrackets('('));
console.log(balBrackets('(This has (too many closes.) ) )'));
console.log(balBrackets('Hey...there are no par here!'));
console.log(balBrackets('))))(((('));
console.log(balBrackets('))))(((('));
