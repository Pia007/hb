/*

Given two lists, find the smallest difference (subtraction) between any two nums.

For example, given the arrays:

[10, 20, 14, 16, 18]
[30, 23, 54, 33, 96]
The result would be 3, since 23 - 20 = 3 is the smallest difference of any pair of numbers in those lists.

Write a function that determines the smallest difference.

*/ 

// function 
    // 2 args - arrays
    // return smallest difference between any two nums in the arrays
    // need to set a variable to hold the smallest difference

    // interate over the array 
        // iterate over the second array
            // get the difference between numbers at each index 
                // get the absolute value of the difference
                    // Math.abs()
            // if the difference is smaller than the smallest difference
                // set the smallest difference to the difference
    // return the smallest difference


const smallestDiff = (arr1, arr2) => {
    // let smallest = '';      doesn't work
    // let smallest = 'undefined';     doesn't work
    // let smallest = null;     doesn't work

    let smallest = Infinity;    // works
    // MDN Docs: The global property Infinity is a numeric value representing infinity
    // 
    
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
        let diff = Math.abs(arr1[i] - arr2[j]);
        if (diff < smallest) {
            smallest = diff;
        }
        }
    }
    
    return smallest;
}



console.log(smallestDiff([10, 20, 14, 16, 18], [30, 23, 54, 33, 96])); // 3