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