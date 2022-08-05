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

applyDiscountsByInventory(dogProducts, applyFlatRateDiscount, 40, 5);
console.log(dogProducts);

console.log("-----------");

applyDiscountsByInventory(catProducts, applyFlatRateDiscount, 40, .5);
console.log(catProducts);