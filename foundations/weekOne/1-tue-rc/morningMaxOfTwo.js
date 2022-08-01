//Tuesday 07/26/2022 - Stretch Exercise 
// Write a block of code that returns the largest value and the "they are identical if they are equal"
let x = 12
let y = 5

// Write your code below this line.
if ( y > x ) {
    console.log(y); 
} else if ( x > y ) {
    console.log(x);
} else {
    console.log("The values are identical");
}



// How I would solving this problem:
// function maxOfTwo(x, y) {
//     if (x > y ) {
//         return x
//     } else if (x < y) {
//         return y
//     } else {
//         return "The values are identical"
//     }
// }

// console.log(maxOfTwo(1, 2));
// console.log(maxOfTwo(4, 0));
// console.log(maxOfTwo(1, 1));