/* This challenge, you’ll write a function, called best, that returns the maximum profit possible for buying-and-selling a stock.

The best function will be given an array of stock prices in the order they happened throughout the day.

It should return the maximum possible profit on the stock for that day.

For example, with the following prices, our best option would have been to buy the stock at $10 and sell it at $22. So the profit would be $12:

best([15, 10, 20, 22, 1, 9])
12
Here are some more examples with positive profit:

best([1, 2, 3, 4, 5])
    4 -buy at $1, sell at $5

best([2, 3, 10, 6, 4, 8, 1])
    8 - buy at $2, sell at $10

best([7, 9, 5, 6, 3, 2])
    2 - buy at $7, sell at $9

best([0, 100])
    100 - buy at $0, sell at $100
If no profit is possible, return $0:

best([5, 4 , 3, 2, 1])
    0

best([100])
    0

best([100, 0])
    0

*/

// Todo: Function that takes in an array of stock prices and returns the best profit I can make from one purchase and one sale of one stock.
    //* initialize a variable to store the lowest price
    //* initialize a variable to store the current profit
    //* initialize a variable to store the max profit

    //* Loop through the array 
        //? If the current low price, index, is less than the current price 
            //~ set the current low price to the current price
        //^ define the current profit as the current price - the current low price
        //? If the current profit is greater than the max profit
            //~ set the max profit to the current profit
    //* Return the max profit


const best = (priceArr) => {
    let currentLow;
    let currentProfit = 0;
    let maxProfit = 0;

    for (let i = 0; i < priceArr.length; i++){
        if (currentLow === undefined || priceArr[i] < currentLow){
            currentLow = priceArr[i]
            console.log(`This is the current low: ${currentLow}`)
        }

        currentProfit = priceArr[i] - currentLow
        console.log(`This is the current profit: ${currentProfit}`)

        if (currentProfit > maxProfit){
            maxProfit = currentProfit
        }
    }
    return maxProfit;
}


// Todo: Test Cases
console.log(best([15, 10, 20, 22, 1, 9]));
console.log(best([1, 2, 3, 4, 5]));
console.log(best([2, 3, 10, 6, 4, 8, 1]));
console.log(best([7, 9, 5, 6, 3, 2]));
console.log(best([0, 100]));
console.log(best([5, 4 , 3, 2, 1]));
console.log(best([100]));
console.log(best([0]));

