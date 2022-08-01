// Given an array of numbers, console.log true if any two numbers in the array add to zero, otherwise log false.

// For example:

// [1, 4, 11, 2, 37, -4] should log true because 4 and -4 add to 0.

// [0, 21, 33, 6, 0, -9] should log true because 0 and 0 add to 0.

// [0, 1, 2, 3, 4, 5] should log false because no two numbers add to 0.


// define the default boolean to false
// loop through outer loop, as long as index, i, is less than than array length, increment
    // loop through inner loop, as long as index, k, is less than array length, increment
       // check to see if outer[index] is not same as inner[index]
        // set the sum equal to outer[index] + inner[index] 
       // condition - if sum is strictly equal to 0, then result is true
// condition - if the result is strictly equal to true
    // print true
// otherwise - print false



function addToZero(array) {
    let outcome = false;
    for (let i = 0; i < array.length; i++) {
        // using i + 1, no need to check if i and k are equal
        for (let k = i + 1; k < array.length; k++) {
            sum = array[i] + array[k];
            if (sum === 0) {
                outcome = true;
            }
        }
    }
    return outcome;
}

console.log(addToZero([1, 4, 11, 2, 37, -4]));
console.log(addToZero([0, 21, 33, 6, 0, -9]));
console.log(addToZero([0, 1, 2, 3, 4, 5]));
console.log("-------------");



let array = [1, 4, 11, 2, 37, -4]
// let array = [0, 21, 33, 6, 0, -9]
// let array = [0, 1, 2, 3, 4, 5]

let result = false;

for ( let i = 0; i < array.length; i++ ) {
    for ( let k = 0; k < array.length; k++ ) {
        // check to see if outer[index] is not same as inner[index]
        if ( i !== k) {
            if (array[i] + array[k] === 0 ) {
                result = true;
            } 
        }
    }
}
    

console.log(result);
console.log("-------------");



function toZero(array) {
    let outcome = false;
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            sum = array[i] + array[j];
            if (sum === 0) {
                outcome = true;
            }
        }
    }
    return outcome;

}

console.log(toZero(array));




