////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE
//^ The callbacks
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

// * use + short hand to check to see if num1 and num2 are numbers or can be made into numbers
// ! if it cannot convert to a number, it will return NaN
    //? use boolean && to make sure that both are true

const calculator = (num1, num2, callback) => {
    if (+num1 && +num2) {
        num1 = +num1
        num2 = +num2

        //? Use the callback to perform the calculations
        return callback(num1, num2)
    } else {
        console.log('you need to send in numbers')
    }
}

// Todo: Test the calculator
const result = calculator(1,2,add);
const subtractResult = calculator(121, 69, subtract);
const otherResult = calculator(3,4,multiply);
const divideResult = calculator(100, 25, divide);

// Todo: print the results
console.log(`This is the addition result: ${result}`);
console.log(`This is the subtraction result: ${subtractResult}`);
console.log(`This is the multiplication result: ${otherResult}`);
console.log(`This is the division result: ${divideResult}`);

console.log("-----------");

///////////////////////
////// PET STORE //////
///////////////////////



const dogProducts = [
    {
        name: 'leash',
        colors: ['red', 'blue', 'green'],
        category: 1,
        inventory: 30,
        basePrice: 13.99, 
        displayPrice: 13.99
    }, 
    {
        name: 'chew toy',
        colors: ['brown'],
        category: 2,
        inventory: 120,
        basePrice: 6.00, 
        displayPrice: 6.00
    }, 
    {
        name: 'rope',
        colors: ['blue & green', 'red & yellow'],
        category: 2,
        inventory: 75,
        basePrice: 4.99, 
        displayPrice: 4.99
    }
]

const catProducts = [
    {
        name: 'mouse toy', 
        colors: ['pink', 'grey', 'black'], 
        category: 2, 
        inventory: 125, 
        basePrice: 2.50, 
        displayPrice: 2.50
    },
    {
        name: 'cat sweater',
        colors: ['black'],
        category: 1,
        inventory: 15,
        basePrice: 10.00, 
        displayPrice: 10.00
    }, 
    {
        name: 'scratching post',
        colors: ['tan'],
        category: 2,
        inventory: 40,
        basePrice: 22.99, 
        displayPrice: 22.99
    }
]
// TODO:
// ^you’re given an array of dog products and one of cat products, we’ll be looping these and changing values

//^ the base price is the normal price that would be charged, display is how it should show up on the website

// ^we want to be able to loop over the arrays separately and apply discounts by percentage (25% off) or by rate ($5 off)

//^ we also want to be able to apply these to all products in an array, or according to category (sale on toys specifically), or

//^ according to inventory (trying to sell the last little bit to make room for more products, get it while it lasts type of sale)
//^ start with the discount functions, these will eventually be called as callbacks, they’ll both take in a product to change and the size of the discount

// ^ the percent discount subtracts the discount from 1 to get the actual percentage, so make sure you’re entering percentagesas decimals (.25 for 25%, then it will actually give you .75 of the basePrice)



// CODE HERE

//^ The callbacks
const applyPercentDiscount = (product, discount) => {
    product.displayPrice = (product.basePrice * ( 1 - discount));
};

const applyFlatRateDiscount = (product, discount) => {
    product.displayPrice = product.basePrice - discount;
};

//! 1st arg - arr, 2nd arr - the callback, 3rd arg- discount that the callback will use
    //? use forEach bc it can modify the initial array while map will create a copy
    //? looping over the array of objects and for each product,apply the applyPercentDiscount by passing in (product, discount)
    //* this will apply discounts to everything in the array


const applyDiscounts = (arr, callback, discount) => {
    arr.forEach(product => {
        callback(product, discount)
    });
}

// ^ Test - call the applyDiscounts function and pass in the dogProducts array and the appyPercentDiscount callback and a 10% discount

// applyDiscounts(dogProducts, applyPercentDiscount, .1);

// console.log(`THESE ARE DOG PRODUCTS `, dogProducts);
// console.log("-----------");

// applyDiscounts(catProducts, applyFlatRateDiscount, 2);

// console.log(`THESE ARE CAT PRODUCTS `, catProducts);

// console.log("-----------");

//^ now let’s write a function that only applies discounts to products in a certain category, so we could have a sale on only toys or only food, etc

// loop over each product and only apply the discount if the product has the right category

const applyDiscountsByCategory = (arr, category, callback, discount) => {
    arr.forEach(product => {
        if (product.category === category) {
            callback(product, discount);
        }
    });
};

// ^ Test and making sure to pass in the category

// applyDiscountsByCategory(catProducts, 2, applyPercentDiscount, .15);

// console.log(`THESE ARE CAT PRODUCTS, CATEGORY 2 `, catProducts);

// console.log("-----------");


// applyDiscountsByCategory(dogProducts, 1, applyPercentDiscount, .30);

// console.log(`THESE ARE DOG PRODUCTS, CATEGORY 1`, dogProducts);
// console.log("-----------");


const applyDiscountsByInventory = (arr, callback, amount, discount) => {
    arr.forEach(product => {
        if (product.inventory < amount) {
            callback(product, discount);
        }
    });
};

// applyDiscountsByInventory(dogProducts, applyFlatRateDiscount, 40, 5);
// console.log(dogProducts);

// console.log("-----------");

// applyDiscountsByInventory(catProducts, applyFlatRateDiscount, 40, .5);
// console.log(catProducts);

console.log("-----------");
////////////////////////
////// SANDWICHES //////
////////////////////////
// ^ this is somewhat of a silly example, but they’ll be able to practice another in the lab exercise

// ^arguably, every sandwich starts with bread, so let’s make a higher order function that returns functions that “make sandwiches” on the specified type of bread
// ^ the bread type should be a string and the ingredients on the inner function should be an array of strings, even if it’s only one thing
// ^ the inner function just repeats your order back to you
// ^ the if statement makes the sentence look nice based on the number of ingredients and which iteration of the loop you’re on

// CODE HERE
function makeSandwich(bread) {
    return function(ingredients) {
        let order = `You ordered a ${bread} bread sandwich with: `;

        // loop over the ingredients for each would also work
        for (let i = 0; i < ingredients.length; i++) {
            if (i === ingredients.length - 1 && i !== 0) {
                order += `and ${ingredients[i]}.`;
            } else if( ingredients.length === 1) {
                order += `${ingredients[i]}. `;
            } else {
                order += `${ingredients[i]}, `;
            }
        }
        return order;

        // can use forEach as well
        // ingredients.forEach((ingredient, index) => {
        //     sentence += `${ingredient} `;
        //     if (index === ingredients.length - 1) {
        //         sentence += `and ${ingredient}`;
        //     }
        // });
        // console.log(sentence);
    }
}

// so now we can make some functions from this function that will create sandwiches on different types of bread

// and call those functions passing in ingredients and you should see the console logs

const makeWheatSandwich = makeSandwich('wheat');
const sandwichOne = makeWheatSandwich(['cheese', 'lettuce', 'tomato']);

const makeRyeSandwich = makeSandwich('rye');
const sandwichTwo = makeRyeSandwich(['pickles', 'peppers', 'turkey']);

const makeSourdoughSandwich = makeSandwich('sourdough');
const sandwichThree = makeSourdoughSandwich(['lettuce', 'ham', 'cheese']);
console.log(sandwichOne);
console.log("-----------");

console.log(sandwichTwo);
console.log("-----------");

console.log(sandwichThree);

console.log("-----------");
////////////////////////////////////
////// COPY AND CHANGE ARRAYS //////
////////////////////////////////////

// there are two provided functions that we’ll be parsing out into 3 functions so that the repeated parts can be taken care of in one function instead of being repeated


const lotr = ['biLbO BaGGINs', 'leGOlAs', 'Frodo bAGGINS', 'sAMwiSe GamGEe', 'gAndALF tHe GREY']

const copyArrToCamelCase = arr => {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        const str = arr[i]
        const splitStr = str.split(' ')
        let camelCaseStr = ''
        
        for (let x = 0; x < splitStr.length; x++) {
            let word = splitStr[x]

            word = word.toLowerCase()

            if (x !== 0) {
                word = word.charAt(0).toUpperCase() + word.slice(1)
            }

            camelCaseStr += word
        }

        newArr.push(camelCaseStr)
    }

    return newArr
}


// copy arr_to_snake_case
const copyArrToSnakeCase = arr => {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i]
        str = str.toLowerCase()
        const splitStr = str.split(' ')
        const snakeCaseStr = splitStr.join('_')
        newArr.push(snakeCaseStr)
    }

    return newArr
}

// CODE HERE

// rewrite 

const copyArrAndChange = (arr, callback) => {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        let newValue = callback(arr[i]);
        result.push(newValue);
    }
    return result;
}

// write the callbacks that we will use

const copyStrToCamelCase = str => {
    const splitStr = str.split(' ')
    let camelCaseStr = ''
    
    for (let x = 0; x < splitStr.length; x++) {
        let word = splitStr[x];
        word = word.toLowerCase();
        if (x !== 0) {
            word = word.charAt(0).toUpperCase() + word.slice(1)
        }
        camelCaseStr += word
    }

    return camelCaseStr;
}

const copyStrToSnakeCase = str => {
    str = str.toLowerCase();
    const splitStr = str.split(' ');
    const snakeCaseStr = splitStr.join('_');
    return snakeCaseStr;
}

// call the functions
const lotrCamel = copyArrAndChange(lotr, copyStrToCamelCase);
console.log(lotrCamel);
console.log("-----------");

const lotrSnake = copyArrAndChange(lotr, copyStrToSnakeCase);
console.log(lotrSnake);
console.log("-----------");
////////////////////////////////////////
////// HIGHER ORDER ARRAY METHODS //////
////////////////////////////////////////


//// MAP ////

/*
    Pass a callback to map that will return 'pink'
    for each color in the array.
*/

const colors = ['red', 'blue', 'yellow', 'green', 'orange']

const mappedColors = colors.map( color => color = 'pink');
console.log(mappedColors);

/*
    Edit the formalGreeting function and use the built in .map method 
    to map over the names parameter and return a new array with "Hello, " 
    appended to the beginning of each name
    
    Make sure to use arrow functions combined with the map method    
*/

const formalNames = ['Bernard', 'Elizabeth', 'Conrad', 'Mary Margaret']

const formalGreeting = names => {
    return names.map( name => `Hello, ${name}`)
}

// Call formalGreeting passing in the formalNames array

console.log(formalGreeting(formalNames));
console.log("-----------");
//// FILTER ////

/*
    Pass a callback to filter that will return
    only strings that begin with the letter A
*/

const places = ['Binghampton', 'Albany', 'New York', 'Ithaca', 'Auburn', 'Rochester', 'Buffalo']

const placesThatStartWithA  = places.filter(place => place.startsWith('A'));
console.log(placesThatStartWithA);

console.log("-----------");
/*
    Create a function called identifier that uses the filter higher order 
    array method to filter over the provided jobs array of objects

    The function should return the object of the person with a job as a programmer
    
    Make sure to use the arrow function in conjunction with the filter method
    
    Your returned value should be a single object, not an array with one object inside of it
    
    Use arrow functions and the filter method
*/

// Do not edit the code below.
let jobs = [
	{ receptionist: "James" },
	{ programmer: "Steve" },
	{ designer: "Alicia" },
];

// Do not edit the code above.

// CODE HERE
const identifier = obj => {
    return obj.filter(item => item.programmer)[0];
}
// call the function passing in the jobs array

console.log(identifier(jobs));
console.log("-----------");
//// REDUCE ////

/*
    Edit the productOfArray function and use 
    the built in .reduce method to loop over the numbers parameter
    and return the product of all the numbers in the array

    Make sure to use arrow functions combined with the reduce method    
*/

const numsToReduce = [43, 7, 24, 79, 290]

const productOfArray = numbers => {
    return numbers.reduce((acc, num) => acc * num);
}

// CODE HERE
console.log(productOfArray(numsToReduce));

console.log("-----------");

// call productOfArray passing in numsToReduce


/*
    Pass a callback and an initial value to reduce 
    that will subtract all the expenses in the array
    from the initial budget

    This will allow us to see how much we have left
    in the budget after these expenses
*/

const budget = 2000

const expenses = [
    {
        title: 'rent', 
        amount: 1000
    }, 
    {
        title: 'car payment', 
        amount: 250
    }, 
    {
        title: 'food', 
        amount: 300
    }
]

const remaining  = expenses.reduce((acc, expense) => acc - expense.amount, budget);
console.log(remaining);