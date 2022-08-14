/* Task 1: Create 2 functions. One will print the current day of the week and the other will display the current time.  */

//^ jS built in Date object 
    //* using the getDay method returns the day of the week as a number
    //* using the toLocaleString method returns the day of the week as a string
    //* using the getHours method returns the current hour as a number

const dayOfWeek = () => {
    // day = new Date().getDay();
    let dayName = new Date().toLocaleString('default', {weekday: 'long'});
    return dayName;
};
console.log(dayOfWeek());

console.log("----------");

const timeOfDay = () => {
    // time = new Date().getHours();
    let time = new Date().toLocaleString('default', {hour: 'numeric', minute: 'numeric', second: 'numeric'});
    return time;
};
console.log(timeOfDay());

console.log("----------");

/* Task 2: Create a function that will take in a callback as a parameter to display the Day of the week. Then invoke that function */

// const displayDay = (callback) => {
//     console.log(callback());
// }

// displayDay(dayOfWeek);

/* Task 3: Rewite th above function so that it also displays the time of day as well as the date. The invoke that function */

const displayDay = (day, time) => {
    console.log(`Today is ${day()} and it is ${time()}.`);
}

displayDay(dayOfWeek, timeOfDay);

console.log("----------");


/* Task 4: Create 2 callback functions and invoke each of them inside another function*/

const myInner = () => `I am studying callback functions.`;
const myFeelings = () => `I am feeling great.`;

const myOuter = (callback1, callback2) => {
    console.log(callback1());
    console.log(callback2());
}

myOuter(myInner, myFeelings);
console.log("----------");

/* Task 5: Create an array of cars object that inludes the model, brand, color, type,and number of passengers */

const cars = [
    {
        model: 'Accord',
        brand: 'Honda',
        color: 'red',
        type: 'sedan',
        passengers: 5
    },
    {
        model: 'Prius',
        brand: 'Toyota',
        color: 'blue',
        type: 'hatchback',
        passengers: 4
    },
    {
        model: 'Terrain',
        brand: 'GMC',
        color: 'black',
        type: 'SUV',
        passengers: 5
    },
    {
        model: 'Jetta',
        brand: 'Volkswagen',
        color: 'white',
        type: 'sedan',
        passengers: 5
    }
];

/* Task 6: Create a higher order function that will return the model/models of any car/cars based on a property.   */

const getCarNames = (arr, property, value, callback) => {
    arr.filter(car => {
        if(car[property] === value) {
            return callback(car.model);
        }
    })
}

/* Task6b: Find any cars that are sedans */
getCarNames(cars, 'type', 'sedan', model => {
    console.log(`The ${model} is a sedan.`);
});
console.log("----------");

/* Task 6c: Find any cars that are hatchbacks */
getCarNames(cars, 'type', 'hatchback', model => {
    console.log(`The ${model} is a hatchback.`);
});

console.log("----------");


/* Task 7:  Create a higher order function that will add a new property and value to any car based on certain conditons*/

const addProperty = (arr, property, value, addProp, addValue, callback) => {
    arr.map(car => {
        if(car[property] === value) {
            car[addProp] = addValue;
            return callback(car.model);
        }
    });
}

addProperty(cars, 'color', 'red', 'recall', 'yes', model => {
    console.log(`The ${model} has a manufacturer's recall.`);
});

console.log(cars);
console.log("----------");

/*  Use the above function to change or add other car properties and values */
addProperty(cars, 'passengers', 4, 'hybrid', 'yes', model => {
    console.log(`The ${model} has a hybrid.`);
});

console.log(cars);

console.log("----------");

/* Use the function above to change any models color */
addProperty(cars, 'model', 'Jetta', 'color', 'orange', model => {
    console.log(`The ${model} is now orange.`);
});

console.log(cars);
console.log("----------");