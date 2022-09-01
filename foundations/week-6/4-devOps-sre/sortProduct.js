/*

Your task is to sort an array of integer numbers by the product (multiplication) of the value and the index.

For sorting the index starts at 1, NOT at 0!

The sorting has to be ascending.

The array will never be null and will always contain numbers.

Example:

Input: 23, 2, 3, 4, 5

Product of value and index:

23 => 23 * 1 = 23 -> Output-Pos 4

2 => 2 * 2 = 4 -> Output-Pos 1

3 => 3 * 3 = 9 -> Output-Pos 2

4 => 4 * 4 = 16 -> Output-Pos 3

5 => 5 * 5 = 25 -> Output-Pos 5

Output: 2, 3, 4, 23, 5

*/

//* function  take one arg
    //^ arg, is an array of numbers that will be sorted by the product of the value and the index
    //* multiply the value by its index + 1
    //* sort the array in ascending order
    //* do the multiplication 1st
    //* then based on the product, sort the array in ascending order


const sortProduct = (arr) => {
    // map over the array and make subarry of the value and the product of the index + 1 , value * (index + 1)
    arr = arr.map((item, index) => [item, item * (index + 1)]);
    console.log(arr);

    // sort the array in acsending order
    let sortArr = arr.sort((a, b) => a[1] - b[1])
    console.log(sortArr);

    // now just get the original item but sorting it by product
    let productSort = sortArr.map(a => a[0]);
    console.log(productSort);

    return productSort;
};

console.log(sortProduct([23, 2, 3, 4, 5])); // 2, 3, 4, 23, 5

//^ this way is all of the above in one line
const sortByProduct = array => {
  return array.map((item, index) => [item, item * (index + 1)]).sort((a, b) => a[1] - b[1]).map(a => a[0]);
};

console.log(sortByProduct([23, 2, 3, 4, 5])); // 2, 3, 4, 23, 5