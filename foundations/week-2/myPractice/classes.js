/* Task 1 Create a new class called Movie. This movie will have a title, rating, genre duration, hasGoodRatings, isFamilyMovie.

Give the movie a method called 'intro' that prints details of the movie.
Give the movie a method called 'recommendation' that prints a recommendation based on the it's reviews.
Give the movie a method called 'updateReview' that changes the review to 'true'.

*/

class Movie {
    constructor(title, genre, rating, duration, hasGoodReviews, isFamilyMovie) {
        this.title = title;
        this.genre = genre;
        this.rating = rating;
        this.duration = duration;
        this.hasGoodReviews = hasGoodReviews;
        this.isFamilyMovie = isFamilyMovie;
    }

    intro() {
        console.log(`${this.title} is a rated ${this.rating} ${this.genre} and it is ${this.duration}mins long.`)
    }

    recommendation() {
        if(!this.hasGoodReviews) {
            console.log(`${this.title} has bad reviews.`);
        } else {
            console.log(`${this.title} has good reviews.`)
        }
    }

    updateReview() {
        if(this.hasGoodReviews === true) {
            this.hasGoodReviews = false;
        } else {
            this.hasGoodReviews = true;
        }
    }

    family() {
        if(!this.isForFamily){
            console.log(`This is not a family movie.`)
        }else {
            console.log(`This is a family movie.`)
        }
    }
}

/* Task 2: instantiate a new object of Movie class */
const movieOne = new Movie('JS Hurts Me', 'comedy', 'PG-13', 90, false, true);
console.log(movieOne);
console.log("----------");

/* Task 3: call the intro method on your movie object */
movieOne.intro();
console.log("----------");

/* Task 4: call the recommendation method on your movie object*/
movieOne.recommendation();
console.log("----------");

/* Task 5: update the movies' review then call the recommendation method  */
movieOne.updateReview();
movieOne.recommendation();
console.log(movieOne);
console.log("----------");

/* Task 6: check to see if the movie is a family movie */
movieOne.family();
console.log("----------");


/* Task 7: Lets extend the parent class to make a more specific version of the movie class

*/

class ForeignLanguageFilm extends Movie {
    constructor(title, genre, rating, duration, hasGoodReviews, isFamilyMovie, language, subtitles) {
        super(title, genre, rating, duration, hasGoodReviews, isFamilyMovie)

        this.language = language;
        this.subtitles = subtitles;
    }

    whatLanguage() {
        console.log(`This is a ${this.language}-language film.`);
    }

    hasSubtitles() {
        console.log(`This film has ${this.subtitles} subtitles.`);
    }
}

/* Task 8  instantiate a new object of the Foreign Language Film */

const foreignFilmOne = new ForeignLanguageFilm('Breathless Nights', 'romance', 'Rated-R', 120, true, false, 'French', 'English');
console.log(foreignFilmOne);
console.log("----------");

/* Task 9:  call the intro method on your movie object */
foreignFilmOne.intro();
console.log("----------");

/* Task 10: call the recommendation method on your movie object*/
foreignFilmOne.recommendation();
console.log("----------");

/* Task 11: check to see if the movie is a family movie */
foreignFilmOne.family();
console.log("-----------");

/* Task 12: check to see what language the film is in */
foreignFilmOne.whatLanguage();
console.log("-----------");

/* Task 13: check to if the film has subtitles */
foreignFilmOne.hasSubtitles();
console.log("-----------");

/* Task 14: call the update review method on the film, then call the recommendation method */
foreignFilmOne.updateReview();
foreignFilmOne.recommendation();




