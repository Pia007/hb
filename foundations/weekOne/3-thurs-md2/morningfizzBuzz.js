
/* Write a program that counts from 1 to 50 in fizzbuzz fashion.

To do so, loop from 1 to 50 (inclusive). Each time through, if the number is evenly divisible by 3, say ‘fizz’. If the number is evenly divisible by 5, say ‘buzz’. If the number is evenly divisible by both 3 and 5, say ‘fizzbuzz’. Otherwise, say the number. */


// Write your solution below this line:

// loop over 1 - 50, set variable, i, as long as its less than or equal to 50, increment
    // if i is divisible by 3 and if i is divisible by 5 
        // print fizzbuzz
    // otherwise, if just divisible by 3
        // print fizz
    // otherwise, if just divisible by 5
        // print buzz
    // otherwise
        // print the number


for( let i = 1; i <= 50; i++) {
    if( i % 3 === 0 && i % 5 === 0) {             // can also ( i % 15 === 0)
        console.log(`fizzbuzz`);
    } else if (i % 3 === 0) {
        console.log(`fizz`);
    } else if (i % 5 === 0) {
        console.log(`buzz`);
    } else {
        console.log(i);
    }
}


// Using a while loop 
let w = 1

while (w <= 50) {
    
    if( w % 3 === 0 && w % 5 === 0) {             // can also ( i % 15 === 0)
        console.log(`fizzbuzz`);

    } else if (w % 3 === 0) {
        console.log(`fizz`);

    } else if (w % 5 === 0) {
        console.log(`buzz`);
        
    } else {
        console.log(w);
    }
    w++; 
}



// Using a while loop and ternary operator
let n = 1;

while (n <= 50) {
    console.log(n % 15 ? (n % 5 ? (n % 3 ? n : 'fizz') : 'buzz') : 'fizzbuzz');
    n++;
}