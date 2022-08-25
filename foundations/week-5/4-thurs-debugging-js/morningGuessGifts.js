/*

It’s your birthday! You wrote a wishlist and now you’re trying to guess which gift is which before you open it.

You will be given a wishlist (array), containing all possible items. Each item is in the format:

{name: "toy car",
size: "medium",
clatters: "a bit",
weight: "medium"}
You also get a list of presents (array) which have the following format each:

{size: "small",
clatters: "no",
weight: "light"}
Your task is to return the names of all wishlisted presents that you might have gotten.

Rules

Possible values for size: “small”, “medium”, “large”

Possible values for clatters: “no”, “a bit”, “yes”

Possible values for weight: “light”, “medium”, “heavy”

Don’t add any item more than once to the result

The order of names in the output doesn’t matter

It’s possible, that multiple items from your wish list have the same attribute values. If they match the attributes of one of the presents, add all of them.

Example:

var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

var presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];

guessGifts(wishlist, presents); // must return ["Toy Car", "Mini Puzzle"]


*/


let wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

let presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];

//* function takes two args - wishlist, presents, both are arrays
    //^ variable to store names of all wishlist presents that you may get
        //^ let possibleGifts = []
    //? How to compare array items
        //? For loop  
            //^ outer loop and inner loop
            //? if all properties match --  &&
        //? What to do if conditons are met 
            //^ add name of wishlist item to possibleGifts
    //* return possibleGifts

const guessGifts = (wishlist, presents) => {
    let possibleGifts = []

    for ( let i = 0; i < wishlist.length; i++ ) {
        for( let k = 0; k < presents.length; k++ ) {
            if(wishlist[i].size === presents[k].size && wishlist[i].clatters === presents[k].clatters && wishlist[i].weight === presents[k].weight)
                possibleGifts.push(wishlist[i].name);
        }
    }
    return possibleGifts;
}

console.log(guessGifts(wishlist, presents)); // must return ["Toy Car", "Mini Puzzle"]