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