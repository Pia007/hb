/*

Write a function that shifts every letter in a strin N places to the right to encrypt it. A negative N will shift to the left descrypt it

*/


const myCipher = (phrase, num ) => {
    let encrypt = '';
    console.log(num);
    num = Number(num);

    for ( let i = 0; i < phrase.length; i++) {
        if( phrase[i] === ' ') {
            encrypt +=' ';
        } else {
            encrypt += String.fromCharCode(phrase.charCodeAt(i) + num)
        }
    }

    return encrypt;
}

console.log(myCipher('hello', 3));
console.log(myCipher('khoor', -3 ));

console.log(myCipher('I love cryptography!', 3));
console.log(myCipher('L oryh fu|swrjudsk|$', -3));

