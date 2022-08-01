// In this file, we'll continue with our soccer simulation.

// So recently we talked about a soccer match between the Emerald Eagles and the Draconian Dragons. We used conditional logic to determine soccer match scenarios, and used arrays to manage Mahalia’s backpack. But, there are more than one match in a season. Do we really want to rewrite the same blocks of code over and over again?

// This is where functions come in. Functions allow us to perform the same block of code many times, without having to rewrite the entire block of code. They even allow us to take in parameters to slightly modify the data that the function uses.

// First, let’s practice with data types and string methods. Then we’ll get into writing functions

// Create a variable that tracks the Eagles’ morale.
let eaglesMorale = 100;
console.log(`The eagles morale is: `, eaglesMorale);
console.log("------------");

// Convert the variable to a string.
let eaglesMoraleStr = String(eaglesMorale);
// let eaglesMoraleStr = eaglesMorale + '';
console.log(`The eagles morale as a string: `, eaglesMoraleStr);
console.log("------------");

// Practice Boolean value of the variable.
let eaglesMoraleBool = Boolean(eaglesMorale);
console.log(`The Boolean value is: `, eaglesMoraleBool);
console.log("------------");

// Let’s create a string that declares a winner. The winner should be the Dragons.
let theWinnerIs = "The Dragons are the winners";
console.log(theWinnerIs);
console.log("------------");

// Then let’s replace the Dragons with the Eagles.
let newWinner = theWinnerIs.replace('Dragons', 'Eagles');
console.log(newWinner);
console.log("------------");


// Now let’s just confirm that our string contains ‘The Eagles’
console.log(newWinner.includes('Eagles'));
console.log("------------");

// Now we have to convert our string to kebab case
    // to lower
    // split
    // join with a hyphen

// chaining methods
console.log(newWinner.toLowerCase().split(' ').join('-'));

// or individual methods
// let newWinnerLower = newWinner.toLowerCase();
// let newWinnerSplit = newWinnerLower.split(' ');
// let newWinnerKebab = newWinnerSplit.join('-');
// console.log(newWinnerKebab);
console.log("------------");

// Now, let’s create a simple function to see if the Emerald Eagles still have morale left, and then console.log the result.

// function declaration
function doEaglesHaveMorale(){
    if(eaglesMorale > 0){
        console.log('The Eagles have some morale left!');
    } else {
        console.log('The Eagles have no morale left!');
    }
}
doEaglesHaveMorale();
// console.log(doEaglesHaveMorale());
// will get 'undefined' bc the function does not have a return statement
console.log("------------");


// functional expression
// const doEaglesHaveMoraleExpression = () => {
//     if(eaglesMorale > 0){
//         return 'The Eagles have some morale left!';
//     } else {
//         return 'The Eagles have no morale left!';
//     }
// }
// using a return statement eliminates 'undefined'
// console.log(doEaglesHaveMoraleExpression());
// console.log("------------");


// arrow function
// const doEaglesHaveMoraleArrow = () => {
//     if(eaglesMorale > 0){
//         return 'The Eagles have some morale left!';
//     } else {
//         return 'The Eagles have no morale left!';
//     }
// }
// console.log(doEaglesHaveMoraleArrow());
// console.log("------------");

// So we have written this function, but you might notice, it has not actually run yet. This is because functions do not run until they are called. Let’s call the above function.

// const reduceMorale = (amount) => {
//     eaglesMorale -= amount;
// };

// Let’s have the Emerald Eagles lose an important match. A match worth 20 morale.
// reduceMorale(20);

// With our function, we can call our block of code over and over again. Call the function again, because the Eagles just lost another match worth 12 morale.
// reduceMorale(12);

// If that wasn’t all, the Eagles lost a third match. However, they were already expecting to lose, so this match is only 6 morale.
// reduceMorale(6);


// At this point the Emerald Eagles have lost a few times. It would probably be a good time to check and make sure they are still up for matches. Call your doEaglesHaveMorale function.
// doEaglesHaveMorale();

// Thinking about it further, shouldn’t we check to see if the Eagles still have morale after each time they lose a match? We could call the doEaglesHaveMorale function after each time they lose. But, there is an easier way to do that. Modify your reduceMorale function to call doEaglesHaveMorale after it has run all its other code.

const reduceMorale = (amount) => {
    eaglesMorale -= amount;
    doEaglesHaveMorale();
};

// reduceMorale(20);
// reduceMorale(12);
// reduceMorale(6);

reduceMorale(33);
reduceMorale(33);
reduceMorale(34);

console.log("------------");

// Yes, you can call functions from almost anywhere, including from inside another function.

// It is important to know that functions can be set up to have as many parameters as you would like. In this next function, we will use two.

// Let’s create another function that allows 2 teams to shake hands with each other.

const shakeHands = function(team1, team2) {
    console.log(`The ${team1} and ${team2} shake hands.`)

};
shakeHands('Eagles', 'Dragons');
