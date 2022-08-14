// Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. (That is, do not repeat any numbers in the returned list.)
// You can trust that this function will never be called with n < 0 or n > 10
// For example:
  // luckyNumbers(2)
    //  returns [3, 7]
  // luckyNumbers(6)
    // returns [1, 7, 9, 6, 5, 2]

// Write your code below this line.

// * declare a function called luckyNumbers that take one parameter
   // * define an array of numbers, numsList
   // * initialize an empty array called luckyNumbers
   // * loop through numsList
      // * as long as the index is less that num, 
          // * define a random number between 1 and 10, based on the length of numsList
            // * Math.random() rounds down to nearest integer
            // * Math.floor() returns a random number between 0 and 1(inclusive)
          // * push the number at numsList[randomNumber] into the luckyNumbers array
          // * prevent repeats 
              // * splice numsList at numsList[randomNumber]
                // * start, # items to remove, any values to replace
          // * increment the index by 1


const findLuckyNumbers = (num) => {
  let luckyNumbers = [];
  let numsList = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let i = 0; i < num; i++){
    // if ( i != num ) {
      let randomNum = Math.floor(Math.random() * numsList.length);
      luckyNumbers.push(numsList[randomNum])
      numsList.splice(randomNum, 1);
    // }
  }
  return luckyNumbers;
}

console.log(`Lucky numbers: `, findLuckyNumbers(2));
console.log(`Lucky numbers: `, findLuckyNumbers(1));
console.log(`Lucky numbers: `, findLuckyNumbers(2));
console.log(`Lucky numbers: `, findLuckyNumbers(3));
console.log(`Lucky numbers: `, findLuckyNumbers(7));
console.log(`Lucky numbers: `, findLuckyNumbers(4));




