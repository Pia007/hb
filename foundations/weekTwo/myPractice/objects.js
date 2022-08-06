/* Task 1: Create an array of your favorite musicians. Each object will have the name of the musician, genre, how many albums they have released, years active and your favorite song.
*/

const favoriteMusicians = [
   {
        name: 'Bruno Mars',
        genre: [
            'Pop', 'Funk', 'R&B', 'Soul', 'Reggae'
        ],
        instruments: [
            'vocals', 'keyboards', 'harmonica', 'drums', 'piano', 'congas', 'bass', 'ukelele'
        ],
        albums: 4,
        years: 18,
        favoriteSong: 'Finesse'
   }, 
   {
        name: 'Yolanda Adams',
        genre: [
            'Gospel', 'Soul', 'R&B'
        ],
        instruments: ['vocals'],
        albums: 13,
        years: 40,
        favoriteSong: 'Never Give Up'
   }, 
   {
        name: 'Stevie Wonder',
        genre: [
            'Soul', 'Jazz', 'R&B', 'Pop', 'Gospel', 'Funk'
        ],
        instruments: [
            'vocals', 'piano','keyboards', 'harmonica', 'drums'
        ],
        albums: 27,
        years: 60,
        favoriteSong: 'Sir Duke'
   }, 
   {
        name: 'Bill Withers',
        genre: [
            'Soul', 'R&B'
        ],
        instruments: [
            'vocals', 'guitar', 'keyboars'
        ],
        albums: 6,
        years: 9,
        favoriteSong: 'Lovely Day'
   }, 
   {
        name: 'Ola Gjeilo',
        genre: [
            'Classical'
        ],
        instruments: ['piano'],
        albums: 6,
        years: 20,
        favoriteSong: 'Dawn Sky'
   }, 
]

/* Task 2: Print your favorite musicians */
console.log(`This is a list of some of my favorite musicians; `, favoriteMusicians);
console.log("-----------");

/* Task 3: Print the name of the 3rd musician on your list*/ 
console.log(favoriteMusicians[2].name);
console.log("-----------");

/* Task 4: Write a higher order function that returns only the artists who has a genre of Gospel */
const gospelGenre = favoriteMusicians.filter(artist => {
    return artist.genre.includes('Gospel');
});
console.log(`These are gospel artists: `, gospelGenre);
console.log("-----------");

/* Task 5: Rewrite the above function to get the same result*/

const gospelGenreTwo = favoriteMusicians.filter(artist => {
    for(let i = 0; i < artist.genre.length; i++) {
        if(artist.genre[i] === 'Gospel') {
            return artist;
        }
    }
})

console.log(`These are gospel artists: `, gospelGenreTwo);
console.log("-----------");

/* Task 6: Write a function that returns only the artists who has a genre of Gospel and has more than 10 albums */

const moreThanTen = favoriteMusicians.filter(artist => artist.albums > 10);
console.log(`These artists have released more than 10 albums: `, moreThanTen);
console.log("----------");


/* Task 7: Write a function that returns the name of artist with the most albums releases */

const mostAlbums = favoriteMusicians.reduce((acc, artist) => {
    if(artist.albums > acc.albums) {
        return artist;
    } else {
        return acc;
    }
}).name;

console.log(`The artist with the most albums is ${mostAlbums}`);

console.log("-----------");

/* Task 8: Write a function to return the name of the artist that plays the most instruments*/

const mostInstruments = favoriteMusicians.reduce((acc, artist) => {
    if(artist.instruments.length > acc.instruments.length) {
        return artist;
    } else {
        return acc;
    }
}).name;

console.log(`The artist with the most instruments is ${mostInstruments}`);

console.log("-----------");

/* Task 9: Write a function to return the name of the artist that has the most years in the business */

const mostYears = favoriteMusicians.reduce((acc, artist) => {
    if(artist.years > acc.years) {
        return artist;
    } else {
        return acc;
    }
}).name;

console.log(`The artist with the most years is ${mostYears}`);
console.log("-----------");


/* Task 10: Write a function that adds another property, called 'certified' to each object. Make the value, 'platinum'*/

const addStatus = favoriteMusicians.map(artist => {
    artist.certified = 'platinum';
    return artist;
})

console.log(favoriteMusicians);
console.log("-----------");


/* Task 11: Write a function that changes every even object 'certified' property to 'gold'.*/

const changeCertified = favoriteMusicians.map(artist => {
    if (favoriteMusicians.indexOf(artist) % 2 === 0) {
        artist.certified = 'gold';
    }
})

console.log(favoriteMusicians);
console.log("-----------");

/* Task 12: Write a function that returns the total of all of the albums in the array of objects */

const totalAlbums = favoriteMusicians.reduce((acc, artist) => acc + artist.albums, 0);

console.log(`The total number of albums in your list of favorite musicians is ${totalAlbums}`);
console.log("-----------");

/* Task 13: Write a function that returns the total number of years active for all of the artists in the array of objects */

const totalYearsActive = favoriteMusicians.reduce((acc, artist) => acc + artist.years, 0);
console.log(`The total number of years active for all of the artists in your list of favorite musicians is ${totalYearsActive}`);
console.log("-----------");

/* Task 14: I just noticed that the instruments of the object at index 3 has a spelling error. Write a function to correct that spelling */

// const correctSpelling = favoriteMusicians.map(artist => {
//     if (favoriteMusicians.indexOf(artist) === 3) {
//         artist.instruments[2] = 'keyboards';
//     }
// }) 
console.log(favoriteMusicians);
console.log("-----------");

/* Task 15: Comment out the above function and make the correct without using a function*/

favoriteMusicians[3].instruments[2] = 'keyboards';
console.log(favoriteMusicians);
console.log("-----------");