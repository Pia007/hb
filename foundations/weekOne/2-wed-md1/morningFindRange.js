// Starting array
// let array = [28, 43, -12, 30, 4, 0, -36]
// let array = [28, 28, 28] min 28, max 28
// let array = [] undefined
// let array = [1000, 92, -18, 2003, 41, 0, 56]
// let array = [-28, -43, -12, -30, -4, 0, -36]
// let array = [1, 11, 2, 37, 4, 37, -4]


// Write your solution below:


// find min and max values in array
// initailize min and max to first value in array, guarantees that min and max will be the first value in the array
// loop through the array and compare each index to min and max
    // if index is less than min, assign index to min
    // if index is greater than max, assign index to max
// print the min and max


let max = array[0];
let min = array[0];
for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
    } else if (array[i] < min) {
        min = array[i];
    }
}

console.log(`The minimum is ${min} and the maximum is ${max}`);