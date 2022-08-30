/*

You might know some pretty large perfect squares. But what about the NEXT one?

Write a function in perfectSquare.js that finds the next perfect square after the one passed in as an argument and returns it.

Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer (look at the examples if this sounds confusing).

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

For example:

perfectSquare(9) // should return 16 (3x3=9, 4x4=16)

perfectSquare(289) // should return 324 (17x17=289 18x18=324)

perfectSquare(3000) // should return -1 (sq root of 3000 is 54.77)


*/


//* function takes one arg, n
    //^ get the square root of n 
        //^ Math.sqrt(n)
    //? if the square root is an integer
            //^ % 1 === 0
        //^ truthy increment n by 1
        //^ return the square of n 
            //^ Math.pow(n, 2)  
    //^otherwise return -1
    


const nextPerfectSquare = (n) => {
    let sqrt = Math.sqrt(n);
    
    if (sqrt % 1 === 0) {
        // sqrt++;
        let nextPerfect = Math.pow(sqrt + 1, 2);  // or Math.pow(++sqrt, 2)
        
        return `The next perfect square after ${n} is: ${nextPerfect}`;       
    } else {
        return -1;    // instead of else, just return -1
    }
}

//TODO - TEST CASES
console.log(nextPerfectSquare(9)); //  16 
console.log(nextPerfectSquare(289)); //324 
console.log(nextPerfectSquare(3000)); // -1 
console.log(nextPerfectSquare(-1)); // -1
console.log(nextPerfectSquare(-16)); // -1
console.log(nextPerfectSquare(-4)); // -1
console.log(nextPerfectSquare(2));  // -1
console.log(nextPerfectSquare(16)); // 25 
console.log(nextPerfectSquare(25)); // 36
console.log(nextPerfectSquare(36)); // 49
console.log(nextPerfectSquare(49)); // 64
console.log(nextPerfectSquare(64)); // 81