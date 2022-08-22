/*

You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a function that takes the array as an argument and returns this “outlier” N.

Examples:

[2, 4, 0, 100, 4, 11, 2602, 36] Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21] Should return: 160 (the only even number)

*/

//* function findOutlier 
    //* define variables for odd and even ints
    //? if arr lendthe is greater than or equal to 3
        //*interate over the arrau
            //? arr[i] is even
                //* add to even array
            //? arr[i] is odd
                //* add to odd array
        //* if either array length is 1
            //* then its  item at index 0 is the outlier
                //* return the outlier


const findOutlier = (arr) => {
    let odd = [];
    let even = [];
    if (arr.length >= 3) {
        for ( let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                even.push(arr[i]);
            } else {
                odd.push(arr[i]);
            }
        }
        if (even.length === 1) {
            return `The outlier is ${even[0]}`;
        } else {
            return `The outlier is ${odd[0]}`;
        }
    }
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
console.log(findOutlier([2, 4, 0, 100, 17, 22, 1702, 408]));
console.log(findOutlier([2, 4, 0, 100, 85, 22, 1702, 408, 2, 4, 0, 100, 72, 22, 1702, 408]));

