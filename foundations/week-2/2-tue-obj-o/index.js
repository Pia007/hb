// TODO: CREATING OBJECTS, NEST ARRAYS, STORE FUNCTIONS INSIDE OF OBJECTS

// * Create a basic person objects
let person = {
    firstname: "Pia",
    lastname: "Torain",
    age: 38,
    favorites: {
        movies: ["Thor", "Going Large", "Sharknado", "Morbius", "LoTR"],
        artists: ["Bruno Mars", "Aaron Copeland", "The Wiggles", "Beethoven", "Stevie Wonder"]
    },
    greeting: () => {
        console.log('Hello World')
    }

}
console.log("-----------");

// * Access key/value pairs 
// * dot or bracket notation
// console.log(person.firstname);
// console.log(person["firstname"]);   
// console.log(person[firstname]);   error due to scope

console.log("-----------");

// ? How to access the movies of LoTR in my person object
// ! note how to access different data types: objects and arrays
console.log(person.favorites.movies[4]);

console.log("-----------");

// ? Invoke the greeting function
person.greeting();

console.log("-----------");

// * Practice destructuring
// let {lastname} = person;
// console.log(lastname);
// console.log(person.lastname);

console.log("-----------");

let { greeting } = person;
greeting();
console.log("-----------");

// let { firstname, lastname, age } = person;
// firstname = 'Rich';
// console.log(firstname, lastname, age);
// console.log( firstname, person.firstname);

//* destructure and renaming

let { firstname, lastname, age: yearsOfWisdom} = person;
console.log(yearsOfWisdom);

console.log("-----------");

//* Review of looping objects using for...in loops
    //! note use brackets without quotes in a for in loop
    //! if you put "" around property or use dot notation you will get undefined
        // ! person['prop'] or person.prop -----< undefined
// for( const prop in person) {
//     console.log(`The property of ${prop} has a value of: ${person[prop]}`)
// }

console.log("-----------");

// * Practice adding and deleting properties
   //* can use bracket or dot notation

person.job = 'Software Engineer';
console.log(person.job);

console.log("-----------");

console.log(person);
console.log("-----------");
delete person.job;
console.log(person);

console.log("-----------");

// TODO: CLASSES
    //* this keyword is an arbitrary current object's property

class Dog {
    constructor(name, breed, age) {
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.isCute = true;
    }

    //! may sure to use this keyword
    greeting() {
        console.log(`Hello my name is ${this.name}.I am ${this.age} years old. My breed is ${this.breed}.`);
    }

}

//? instantiate a new object of dog class
const jackyBoy = new Dog("JackyBoy", "Poodle", 4);
console.log(jackyBoy);

// * call the greeting method on the jackyBoy class
jackyBoy.greeting();

//? Extending the parent class to make a more specific version of a class
class Puppy extends Dog {
    constructor(name, breed, age, isTeething) {
        super(name, breed, age)

        this.isTeething = isTeething;
    }
}

//? instantiate a new puppy
    //* will receive the default isCute value from the parent w/o it needed to be included in super
const lola = new Puppy("Lola", "Golden Retriever", 1, true);
console.log(lola);



