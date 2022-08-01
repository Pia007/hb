// In this file, we'll be using variables, conditionals,
// the Emerald Eagles and Draconian Dragons
// Create variables to represent the two team's offensive and defensive ability base on stats from previous games.

//offense
let eaglesOff =  12;
let dragonsOff = 5;

//defense
let eaglesDef = 6;
let dragonsDef = 3;

// Before the game, fans decide to check their stats. Using an if-else statement, console.log whose offense is better.

// if (eaglesOff > dragonOff) {
//     console.log("The Emerald Eagles' have a better offense than the Draconian Dragons");
// } else {
//     console.log("The Draconian Dragons' have a better offense than the Emerald Eagles")
// }

// What if we have a tie? Our code would actually say the Emerald Eagles have a better offense, which would be incorrect. Add an else if to resolve this.
if (eaglesOff > dragonsOff) {
    console.log("The Emerald Eagles' have a better offense than the Draconian Dragons.");
} else if ( eaglesOff < dragonOff) {
    console.log("The Draconian Dragons' have a better offense than the Emerald Eagles.");
} else {
    console.log("The two teams have the same offensive ability.")
}


// The game begins! Create two variables to represent the starting scores of the teams.

let eaglesScore = 0;
let dragonsScore = 0;


// The Dragons start with the ball — use an if/else to determine if the Eagles’ defense is enough to prevent them from scoring. If it is not enough, console.log “The Dragons have scored.” and update the score. Otherwise, console.log “The game continues”.

if (dragonsOff > eaglesDef) {
    console.log("The Dragons have scored.");
    dragonsScore++;
    // dragonScore += 1; or can use this one
    // dragonScore = dragonScore + 1; or can use this one
} else {
    console.log("The game continues.");
};


// Now the Eagles have the ball and are trying to score! Use an if/else to determine if the Dragons’ defense is enough to prevent them from scoring. If they do, console.log “The Eagles have scored.” and update the score. Otherwise, console.log “The game continues”.


if (eaglesOff > dragonsDef) {
    console.log("The Eagles have scored.");
    eaglesScore++;
    // eagleScore += 1; or can use this one
    // eagleScore = eagleScore + 1; or can use this one
} else {
    console.log("The game continues.");
}

// After playing a long time, the players are tired. The coach for the Eagles team decides to swap out one of the offensive players for their best offensive player. This player will raise the offense ability of the team by 5. However, the offense ability cannot exceed 10. Using an if else statement, increase the Eagles’ offense ability to the correct value.


// eaglesOff +=  5;
// if (eaglesOff > 10) {
//     eaglesOff = 10;
// }
// console.log(eaglesOff);

// The coach for the Dragons team is thinking about taking a timeout. She decides to flip a coin, and if the coin lands on heads, she will take a timeout. If it lands on tails, she won’t. Create a variable called coinLandsHeads and set it equal to false. Then, using an if-else statement and the equality operator, handle the value of the flipped coin (handle for both true and false).

// let coinlandsHeads = false; 
// if (!coinlandsHeads) {
//     console.log("The coach takes a timeout.");
// } else {
//     console.log("The coach doesn't take a timeout.");
// }

 // or
let coinlandsHeads = false; 
if (!coinlandsHeads) {
    console.log("The coach doesn't take a timeout.");
} else {
    console.log("The coach takes a timeout.");
}


// Let’s see how this game will play out if it continues. Create a for loop to model the Eagles scoring 5 times. Console.log the scores of the teams after each goal.

for (let i = 0; i < 5; i++) {
    eaglesScore+= 1;
    if (eaglesOff > dragonsDef) {

        console.log("The Eagles have scored.");
        
        console.log (`The Eagles: ${eaglesScore} Dragons: ${dragonsScore}`);
    } else {
        console.log("The game continues.");
    };
}

// Demonstrate a while loop that will have the Dragons keep making goals until their score is 5. You will need to comment out the above for loops for these to run properly. Add an if statement that will only let the Dragons make a goal if their offense ability is greater than the Eagles’ defense ability.




if (dragonsOff > eaglesDef) {
    while (dragonsScore < 5) {
        dragonsScore++;
        console.log("The Dragons have scored.");
        console.log (`The Eagles: ${eaglesScore} Dragons: ${dragonsScore}`);
    }

}

// Results in an infinite loop. Fix the code so that the Dragons stop making goals when they reach 5.
// while (!(dragonsScore >= 5)) {
//     if (dragonsOff > eaglesDef) {
//         dragonsScore++;
//         console.log("The Dragons have scored.");
//         console.log (`The Eagles: ${eaglesScore} Dragons: ${dragonsScore}`);
//     }

// }
console.log(dragonsScore);



