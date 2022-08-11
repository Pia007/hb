/* 
Write a function called printDigits that takes in one argument, num. When given an integer, the function should print (console.log) each digit in reverse order, starting with the ones place. Do not do this by just turning the number into a string and reversing it. Solve the problem using math. (Hint: look up while loops, and don’t forget about the % operator.)

For example, if you were given 1 you should simply print 1, if given 314 you should print 4, 1, 3, and if given 12 you should print 2, 1:

printDigits(1)
1

printDigits(314)
4
1
3

printDigits(12)
2
1 
*/

//? 1 % 10 = 1 
  // ^ 1/10 = 0.1  divide by 10
  // ^ 0 * 10 = 0  multiply the whole part by 10
  // ^ 1 - 0 = 1    substract the whole part from the dividend

// ! using % 10 will get the last digit

const printDigits = (num) => {
  while(num > 0) {
    console.log(num % 10); 
    num = Math.floor(num / 10);
  }
}

// Todo Test Cases
console.log(printDigits(1));
console.log(printDigits(314));
console.log(printDigits(12));
console.log(printDigits(1007));
console.log(printDigits(523));
console.log(printDigits(520));


//  Drue solution
// const printDigits = num => {
//   while(num) {
//     let digitToPrint = num % 10;
//     console.log(digitToPrint);
//     num = (num - digitToPrint) / 10
//   }
// }

// // Todo Test Cases
// console.log(printDigits(1));
// console.log(printDigits(314));
// console.log(printDigits(12));
// console.log(printDigits(1007));
// console.log(printDigits(523));


// Drue Demo
// const printStrDigits = num => {
//   num.toString().split('').reverse().forEach( char => (console.log(char)));
// }

// console.log(printStrDigits(1));
// console.log(printStrDigits(314));
// console.log(printStrDigits(12));
// console.log(printStrDigits(1007));
// console.log(printStrDigits(523));